/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { States } from "../constants";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDownState() {
  const [Current, setCurrent] = useState("Select State");
  return (
    <Menu as='div' className='relative inline-block text-left text-lg'>
      <div>
        <Menu.Button className='inline-flex justify-center w-full rounded-md  border-slate-700 shadow-sm px-4 py-2 bg-bgr1  font-medium text-slate-400  border-none outline-none text-lg items-center'>
          {Current}
          <ChevronDownIcon
            className='-mr-1 ml-2 h-5 w-5 text-2xl'
            aria-hidden='true'
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-bgr2 ring-1 ring-black ring-opacity-5 divide-y divide-slate-600 focus:outline-none'>
          <div className='py-1'>
            {States.map((State, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? "bg-bgr2 text-slate-300" : "text-slate-200",
                      "block px-4 py-2 text-sm"
                    )}
                    onClick={() => setCurrent(State)}
                  >
                    {State}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
