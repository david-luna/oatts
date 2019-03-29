# oatts

Open Api Specification Tools in TypeScript

## Summary

This package provides a preset of tools to have an integrated workflow between swagger specs and your source code. This preset contains

- spec import module to sync with already deployed APIs
- spec viewer to check & validate the specs (using oficial viewer)
- template system to generate source code or other kind of files from the specs (using handlebars)
- (in roadmap) plugin system to extend/modify the source generation pipeline

Oatts creates a workspace in your project so you may work with several specs at the same time (microservices?)

## Installation

Install via npm

```bash
npm i oatts --save-dev
```

Or yarn

```bash
yarn add oatts -D
```

## Usage

Once installed you can initialise a new api

```bash
oatts init ${api-name}
```

This command will fire up a wizard asking for details of the new API like

- **scope**: name of the API. For example `@myCompany`
- **url**: where to fetch the specs if apply
