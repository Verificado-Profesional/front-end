import type { DatePickerProps } from '@/types/types';
import { Datepicker, type FlowbiteDatepickerTheme } from 'flowbite-react';

const customTheme: FlowbiteDatepickerTheme = {
  root: {
    base: 'relative',
    input: {
      base: 'flex items-center space-x-2',
      addon:
        'flex items-center px-3 py-2 bg-gray-100 border border-gray-300 rounded-l-lg dark:bg-gray-700 dark:border-gray-600',
      field: {
        base: 'flex-1 relative',
        icon: {
          base: 'absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[var(--color-primary)] dark:text-gray-400',
          svg: 'w-5 h-5',
        },
        rightIcon: {
          base: 'absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500 dark:text-gray-400',
          svg: 'w-5 h-5',
        },
        input: {
          base: 'cursor-pointer block w-fit rounded-3xl border border-gray-300 bg-white py-2 px-3 text-sm leading-5 text-[var(--color-primary)] placeholder-gray-400 focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
          sizes: {
            sm: 'py-1.5 px-2 text-sm',
            md: 'py-2 px-3 text-base',
            lg: 'py-2.5 px-4 text-lg',
          },
          colors: {
            gray: 'border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-gray-500 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-500 dark:focus:ring-gray-500',
            info: 'border-blue-300 bg-white text-blue-900 placeholder-blue-400 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-600 dark:bg-blue-700 dark:text-white dark:placeholder-blue-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
            failure:
              'border-red-300 bg-white text-red-900 placeholder-red-400 focus:border-red-500 focus:ring-red-500 dark:border-red-600 dark:bg-red-700 dark:text-white dark:placeholder-red-400 dark:focus:border-red-500 dark:focus:ring-red-500',
            warning:
              'border-yellow-300 bg-white text-yellow-900 placeholder-yellow-400 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-600 dark:bg-yellow-700 dark:text-white dark:placeholder-yellow-400 dark:focus:border-yellow-500 dark:focus:ring-yellow-500',
            success:
              'border-green-300 bg-white text-green-900 placeholder-green-400 focus:border-green-500 focus:ring-green-500 dark:border-green-600 dark:bg-green-700 dark:text-white dark:placeholder-green-400 dark:focus:border-green-500 dark:focus:ring-green-500',
          },
          withIcon: {
            on: 'pl-10',
            off: '',
          },
          withRightIcon: {
            on: 'pr-10',
            off: '',
          },
          withAddon: {
            on: 'rounded-none rounded-r-lg',
            off: '',
          },
          withShadow: {
            on: 'shadow-sm',
            off: '',
          },
        },
      },
    },
  },
  popup: {
    root: {
      base: 'absolute top-10 -left-[12.5%] z-10 block pt-2',
      inline: 'relative top-0 z-auto',
      inner: 'inline-block rounded-3xl bg-white p-4 shadow-lg dark:bg-gray-700',
    },
    header: {
      base: '',
      title:
        'px-2 py-3 text-center font-semibold text-[var(--color-primary)] dark:text-white',
      selectors: {
        base: 'mb-2 flex justify-between',
        button: {
          base: 'rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[var(--color-primary)] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
          prev: '',
          next: '',
          view: '',
        },
      },
    },
    view: {
      base: 'p-1',
    },
    footer: {
      base: 'mt-2 flex space-x-2',
      button: {
        base: 'w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-1 focus:ring-[var(--color-primary)]',
        today:
          'bg-[var(--color-primary)] text-white hover:text-[var(--color-primary)] hover:bg-[#92A7FF] dark:bg-cyan-600 dark:hover:bg-cyan-700',
        clear:
          'border border-[var(--color-primary)] bg-white text-[var(--color-primary)] hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
      },
    },
  },
  views: {
    days: {
      header: {
        base: 'mb-1 grid grid-cols-7',
        title:
          'h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400',
      },
      items: {
        base: 'grid w-64 grid-cols-7',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-[var(--color-primary)] hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 ',
          selected:
            'bg-[var(--color-primary)] text-white hover:text-[var(--color-primary)] hover:bg-[#92A7FF]',
          disabled: 'text-gray-500',
        },
      },
    },
    months: {
      items: {
        base: 'grid w-64 grid-cols-4',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-[var(--color-primary)] hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600',
          selected:
            'bg-[var(--color-primary)] text-white hover:text-[var(--color-primary)] hover:bg-[#92A7FF]',
          disabled: 'text-gray-500',
        },
      },
    },
    years: {
      items: {
        base: 'grid w-64 grid-cols-4',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-[var(--color-primary)] hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600',
          selected:
            'bg-[var(--color-primary)] text-white hover:text-[var(--color-primary)] hover:bg-[#92A7FF]',
          disabled: 'text-gray-500',
        },
      },
    },
    decades: {
      items: {
        base: 'grid w-64 grid-cols-4',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9  text-[var(--color-primary)] hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600',
          selected:
            'bg-[var(--color-primary)] text-white hover:text-[var(--color-primary)] hover:bg-[#92A7FF]',
          disabled: 'text-gray-500',
        },
      },
    },
  },
};

export default function DatePicker({
  date = new Date(),
  onChange,
}: DatePickerProps) {
  return (
    <Datepicker
      theme={customTheme}
      weekStart={1}
      color={`var(--color-primary)`}
      language='ES'
      tabIndex={1}
      maxDate={new Date()}
      defaultDate={date}
      onSelectedDateChanged={onChange}
    />
  );
}
