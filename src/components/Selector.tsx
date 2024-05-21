import {
  Dropdown,
  DropdownItem,
  type FlowbiteDropdownTheme,
} from 'flowbite-react';

// Types
import type { SelectorProps } from '@/types/types';

const customTheme: FlowbiteDropdownTheme = {
  arrowIcon: 'ml-2 h-4 w-4',
  content: 'py-1 focus:outline-none',
  floating: {
    animation: 'transition-opacity',
    arrow: {
      base: 'absolute z-10 h-2 w-2 rotate-45',
      style: {
        dark: 'bg-gray-900 dark:bg-gray-700',
        light: 'bg-white',
        auto: 'bg-white dark:bg-gray-700',
      },
      placement: '-4px',
    },
    base: 'z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none',
    content: 'py-1 text-sm text-gray-700 dark:text-gray-200',
    divider: 'my-1 h-px bg-gray-100 dark:bg-gray-600',
    header: 'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200',
    hidden: 'invisible opacity-0',
    item: {
      container: '',
      base: 'flex w-full cursor-pointer text-left text-balance items-center justify-start px-4 py-2 text-sm text-[var(--color-primary)] hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white',
      icon: 'mr-2 h-4 w-4',
    },
    style: {
      dark: 'bg-gray-900 text-white dark:bg-gray-700',
      light: 'border border-gray-200 bg-white text-gray-900',
      auto: 'border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white',
    },
    target:
      'group relative justify-center p-0.5 transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 dark:enabled:hover:bg-cyan-700 text-white w-fit bg-[var(--color-primary)] enabled:hover:bg-[#92A7FF] focus:ring-1 focus:outline-none focus:ring-[var(--color-primary)] font-medium rounded-3xl border border-white text-sm text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
  },
  inlineWrapper: 'flex items-center',
};

export default function Selector({ label, items, setSelected }: SelectorProps) {
  if (items.length === 0) {
    return;
  }
  return (
    <Dropdown theme={customTheme} label={label}>
      <div className='max-h-[20rem] overflow-y-scroll'>
        {items.map((item) => (
          <DropdownItem key={item} onClick={() => setSelected(item)}>
            {item}
          </DropdownItem>
        ))}
      </div>
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => setSelected('')}>Reset</Dropdown.Item>
    </Dropdown>
  );
}
