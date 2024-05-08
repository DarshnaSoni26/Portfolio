import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

interface ContactInfo {
  phoneno: string | number;
  gmail: string;
  linkedin: string;
}
interface ContactItem {
  label: string;
  icon: any;
  value: string | number;
  url?: string;
}
export default function Contact(props: ContactInfo) {
  const contactItems: ContactItem[] = [
    {
      label: "Phone",
      icon: faPhone,
      value: props.phoneno,
      url: `tel:${props.phoneno}`,
    },
    {
      label: "Email",
      icon: faEnvelope,
      value: props.gmail,
      url: `mailto:${props.gmail}`,
    },
    {
      label: "LinkedIn",
      icon: faLinkedin,
      value: props.linkedin,
      url: props.linkedin,
    },
  ];

  return (
    <>
      <div id="contact" className=" bg-amber-50 md:w-5/6 md:h-auto p-5">
        <h1 className="md:text-4xl text-3xl text-red-950 font-bold text-center uppercase">
          Contacts
        </h1>
        <div className="text-center md:text-xl text-lg leading-9 md:p-10 p-5">
          <p>
            Should you wish to hire me or explore the possibility of
            collaborating with me, you are welcome to reach out to me through
            the provided contact options
          </p>
        </div>
        <div className=" flex flex-wrap justify-center">
          {contactItems.map((contact, index) => (
            <div
              key={index}
              className="border-x-2 border-slate-500 rounded-xl text-center flex flex-col items-center md:w-1/4 md:h-32 md:m-10 md:pt-4 w-2/3 mx-12 my-5"
            >
              <FontAwesomeIcon className="md:w-9 w-5" icon={contact.icon} />
              <p className="text-sm">
                <span className="text-xl font-bold">{contact.label}</span>
                <br />
                {contact.url ? (
                  <Link href={contact.url}>{contact.value}</Link>
                ) : (
                  <span>{contact.value}</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
