/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDownyrs() {
  return (
    <Menu as='div' className='relative inline-block text-left text-lg'>
      <div>
        <Menu.Button className='inline-flex justify-center w-full rounded-md  border-slate-700 shadow-sm px-4 py-2 bg-white  font-medium text-slate-400  border-none outline-none text-lg items-center'>
          Select Years
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
            <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  className={classNames(
                    active ? "bg-bgr2 text-slate-300" : "text-slate-200",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  2013-2015
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  className={classNames(
                    active ? "bg-bgr2 text-slate-300" : "text-slate-200",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  2015-2017
                </a>
              )}
            </Menu.Item>
          </div>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  className={classNames(
                    active ? "bg-bgr2 text-slate-300" : "text-slate-200",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  2017-2019
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  className={classNames(
                    active ? "bg-bgr2 text-slate-300" : "text-slate-200",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  2019-2021
                </a>
              )}
            </Menu.Item>
          </div>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  className={classNames(
                    active ? "bg-bgr2 text-slate-300" : "text-slate-200",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  2022
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
