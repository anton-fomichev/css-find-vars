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
| --dir          | -d    | string    | ./                       | Directory to search               |
| --pattern      | -p    | string    | --[\w-]+                 | CSS variable pattern              |
| --extensions   | -e    | array     | ['.css']                 | File extensions to look for       |
| --unique       | -u    | boolean   | false                    | Return unique variables only      |
| --help         |       |           |                          | Show help                         |

### Example

To find all CSS variables in the `./styles` directory and return unique variables only:

```sh
sh
css-find-vars --dir ./styles --unique
```
