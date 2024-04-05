import { Accordion, Label, TextInput, Button } from "flowbite-react";
import { HiCalendar } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { ApiResponse } from "../types/types";

export default function TimeDropdown(props: { entries: ApiResponse }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [formError, setFormError] = useState<string>("");

  function handleClearTimeClick() {
    setFrom(() => "");
    setTo(() => "");
    searchParams.has("from")
      ? searchParams.delete("from")
      : oneWeekBefore(new Date()).toISOString();
    searchParams.has("to")
      ? searchParams.delete("to")
      : new Date().toISOString();
    setSearchParams(searchParams);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let error = "";
    const parsedTo = parseDateString(
      to.trim() || new Date().toISOString(),
    ).toString();
    const parsedFrom = parseDateString(
      from.trim() ||
        new Date(
          oneWeekBefore(new Date(parseDateString(to.trim()))),
        ).toISOString(),
    ).toString();

    if (!to && !from) error = "At least one field is required.";
    if (Number.isNaN(Number(parsedTo)) || Number.isNaN(Number(parsedFrom)))
      error = "One or both provided dates were improperly formatted.";
    if (Date.parse(parsedTo.toString()) < Date.parse(parsedFrom.toString()))
      error =
        'The time in the "from" field must be before the time in the "to" field.';

    if (error) {
      setFormError(() => error);
      return;
    }

    setSearchParams((searchParams) => {
      searchParams.set("from", parsedFrom);
      searchParams.set("to", parsedTo);
      return searchParams;
    });
  }

  useEffect(() => {
    if (!searchParams.has("from") && !searchParams.has("to")) return;

    const newFrom = new Date(
      Number(searchParams.get("from")) ||
        oneWeekBefore(new Date(Number(searchParams.get("to")))),
    );
    const newTo = new Date(Number(searchParams.get("to")) || new Date());

    if (
      newFrom instanceof Date &&
      !Number.isNaN(newFrom.getTime()) &&
      newTo instanceof Date &&
      !Number.isNaN(newTo.getTime())
    ) {
      setFrom(() => newFrom.toISOString());
      setTo(() => newTo.toISOString());
    }
  }, [searchParams, props.entries]);

  useEffect(() => {
    setFormError(() => "");
  }, [from, to]);

  return (
    <Accordion collapseAll id="timeWindow">
      <Accordion.Panel>
        <Accordion.Title className="absolute right-2 top-0 z-10 h-8 w-6">
          <div className="relative left-1 size-8 rounded-lg hover:bg-gray-500">
            <HiCalendar className="relative left-2 top-2" />
          </div>
        </Accordion.Title>
        <Accordion.Content>
          <Form
            className="flex w-full flex-col gap-4"
            method="post"
            action="#"
            onSubmit={handleSubmit}
          >
            <h1 className="text-center text-offWhite">Filter By Date</h1>
            <div>
              <div className="mb-2 inline-block w-[3.5rem]">
                <Label htmlFor="from" value="From" />
              </div>
              <TextInput
                id="from"
                name="from"
                placeholder="MM/DD/YYYY HH:MM:SS:MMM"
                color={formError ? "reverbFailure" : "reverb"}
                className="inline-block w-[calc(100%-3.5rem)]"
                onChange={(e) => setFrom(e.target.value)}
                value={from}
              />
            </div>
            <div>
              <div className="mb-2 inline-block w-[3.5rem]">
                <Label htmlFor="to" value="To" />
              </div>
              <TextInput
                id="to"
                name="to"
                placeholder="MM/DD/YYYY HH:MM:SS:MMM"
                color={formError ? "reverbFailure" : "reverb"}
                className="inline-block w-[calc(100%-3.5rem)]"
                onChange={(e) => setTo(e.target.value)}
                value={to}
              />
              <div className="mt-3 rounded-md text-center text-red-700">
                {formError}
              </div>
            </div>
            <div className="ml-auto">
              <Button
                type="submit"
                outline
                className="mr-2 inline-block w-fit"
                gradientDuoTone="reverb"
              >
                Submit
              </Button>
              <Button
                className="inline-block w-fit"
                outline
                gradientDuoTone="reverb"
                onClick={handleClearTimeClick}
              >
                Clear
              </Button>
            </div>
          </Form>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}

function parseDateString(sample: string) {
  if (
    sample.match(
      /^\d\d(\/|-| )\d\d(\/|-| )\d\d\d\d(T| )\d\d:\d\d:\d\d:\d\d\dZ$/,
    )
  ) {
    sample = sample.slice(0, sample.length - 1);
  }

  if (
    sample.match(
      /^\d\d(\/|-| )\d\d(\/|-| )\d\d\d\d(T| )\d\d:\d\d:\d\d:\d\d\d$/,
    ) ||
    sample.match(/^\d\d(\/|-| )\d\d(\/|-| )\d\d\d\d(T| )\d\d:\d\d:\d\d$/) ||
    sample.match(/^\d\d(\/|-| )\d\d(\/|-| )\d\d\d\d(T| )\d\d:\d\d$/)
  ) {
    sample.replace("T", " ");
  }

  return Date.parse(sample);
}

function oneWeekBefore(date: Date) {
  return new Date(Number(date) - 7 * 24 * 60 * 60 * 1000);
}
