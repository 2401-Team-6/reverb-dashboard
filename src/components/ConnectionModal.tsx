"use client";

import { Button, Label, Modal, TextInput } from "flowbite-react";
import React, { useRef, useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useLocalStorage } from "@uidotdev/usehooks";
// import axios from "axios";

export default function ConnectionModal(props: {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [url, setUrl] = useState<string>("");
  const [key, setKey] = useState<string>("");
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [apiUrl, setApiUrl] = useLocalStorage("apiUrl", "");
  const [_apiKey, setApiKey] = useLocalStorage("apiKey", "");

  useEffect(() => {
    // if (!JSON.parse(localStorage.getItem("apiUrl") || ""))
    //   props.setOpenModal(true);

    props.setOpenModal(false);
  }, []);

  useEffect(() => {
    if (!url && apiUrl) setUrl(apiUrl);
  }, [props.openModal]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let formUrl = formatUrl(url);

    if (validUrl(formUrl)) {
    //   const response = await axios.get(formUrl + "/logs/", {
    //     headers: { "x-api-key": key },
    //   });
    //   if (response.status.toString()[0] === "2") {
    //     setApiUrl(formUrl);
    //     setApiKey(key);
    //     props.setOpenModal(false);
    //   } else {
    //     alert("URL returned invalid response");
    //   }
    // } else {
    //   alert("Invalid URL");
    }
  }

  return (
    <>
      <Modal
        show={props.openModal}
        size="3xl"
        popup
        onClose={() => props.setOpenModal(false)}
        initialFocus={emailInputRef}
      >
        <Modal.Header />
        <Modal.Body>
          <Form method="post" action="#" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Connect to your Reverb servers
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="API Gateway URL" />
                </div>
                <TextInput
                  ref={emailInputRef}
                  color="reverb"
                  onChange={(e) => setUrl(e.target.value)}
                  value={url}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="API key" />
                </div>
                <TextInput
                  type="password"
                  onChange={(e) => setKey(e.target.value)}
                  color="reverb"
                />
              </div>
              <div className="w-full">
                <Button gradientDuoTone="reverb" type="submit">
                  Connect
                </Button>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

function validUrl(url: string) {
  return url.match(/^http(s)?:\/\/[^.]+(\.(.)+|)$/);
}

function formatUrl(url: string) {
  if (url[url.length - 1] === "/") url = url.slice(0, url.length - 1);
  if (url.slice(url.length - 3) === "logs") url = url.slice(0, url.length - 3);
  if (url[url.length - 1] === "/") url = url.slice(0, url.length - 1);

  return url;
}
