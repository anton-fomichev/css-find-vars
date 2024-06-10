# css-find-vars

A CLI utility to find and list CSS variables in your project files.

## Table of Contents

- Installation
- Usage
- Options

## Installation

To install this package, simply run:

```sh
npm install css-find-vars -g
```

This will install the css-find-vars command globally on your system.

## Usage

You can run the utility from the command line as follows:

```sh
css-find-vars --dir ./path/to/your/css
```

## Options

The following options are available:

| Option         | Alias | Type      | Default                  | Description                       |
|----------------|-------|-----------|--------------------------|-----------------------------------|
| --help         |       |           |                          | Show help                         |
| --dir          | -d    | string    | ./                       | Directory to search               |
| --pattern      | -p    | string    | --[\\w-]+(?=[;\\s,})])   | CSS variable pattern              |
| --extensions   | -e    | array     | [".css", ".scss"]        | File extensions to look for       |
| --unique       | -u    | boolean   | false                    | Return unique variables only      |
| --order        | -o    | string    | undefined                | Order variables alphabetically    |
| --group        | -g    | string    | undefined                | Group variables by the file       |

### Examples

#### Find all CSS variables in a specific directory

To find all CSS variables in the `./styles` directory:

```sh
css-find-vars --dir ./styles
```

#### Find and return only unique variables

To find all CSS variables in the `./styles` directory and return unique variables only:

```sh
css-find-vars --dir ./styles --unique
```

#### Combine multiple options

To find all CSS variables in the ./styles directory, return unique variables, sort them in ascending order, and group them by the file:

```sh
css-find-vars --dir ./styles --unique --order ASC --group file
```
