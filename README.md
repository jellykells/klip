<p align="center"><a href="https://uwu.ryukyu" title="Klip"><img src="https://raw.githubusercontent.com/thedevs-network/kutt/9d1c873897c3f5b9a1bd0c74dc5d23f2ed01f2ec/static/images/logo-github.png" alt="Klip"></a></p>

# Klip: Kutt like it's perfect

**Klip** is a fork of the modern URL shortener known as Kutt, with support for custom domains. Shorten URLs, manage your links and view the click rate statistics.

_Contributions and bug reports are welcome._

## Demo
[https://uwu.ryukyu](https://uwu.ryukyu)

[![Contributions](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](https://github.com/thedevs-network/kutt/#contributing)
[![GitHub license](https://img.shields.io/github/license/jellykells/klip.svg)](https://github.com/jellykells/klip/blob/develop/LICENSE)

## Migration from v1

If you're coming from v1, refer to [MIGRATION.md](MIGRATION.md) to migrate data from Neo4j to PostgreSQL.

## Table of Contents

- [Key Features](#key-features)
- [Stack](#stack)
- [Setup](#setup)
- [Browser Extensions](#browser-extensions)
- [API](#api)
- [Integrations](#integrations)
- [3rd Party Packages](#3rd-party-packages)
- [Contributing](#contributing)

## Key Features

- Free and open source.
- Custom domain support.
- Custom URLs for shortened links
- Setting password for links.
- Private statistics for shortened URLs.
- View and manage your links.
- RESTful API.

## Stack

- Node (Web server)
- Express (Web server framework)
- Passport (Authentication)
- React (UI library)
- Next (Universal/server-side rendered React)
- Easy Peasy (State management)
- styled-components (CSS styling solution library)
- Recharts (Chart library)
- PostgreSQL (database)
- Redis (Cache layer)

## Setup

You need to have [Node.js](https://nodejs.org/), [PostgreSQL](https://www.postgresql.org/) and [Redis](https://redis.io/) installed.

1. Clone this repository.
2. Copy `.example.env` to `.env` and fill it properly.
3. Install dependencies: `npm install`.
4. Run for development: `npm run dev`.
5. Run for production: `npm run build` then `npm start`.

### Docker

You can use Docker to start the app. The simplest way is to just run `docker-compose up` command and then the app should be ready on port "3000".

## Browser Extensions

Kutt's extensions for web browsers stil work with Klip! Download them via the below links. You can also find the source code at [kutt-extension](https://github.com/abhijithvijayan/kutt-extension).

- [Chrome](https://chrome.google.com/webstore/detail/kutt/pklakpjfiegjacoppcodencchehlfnpd)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/kutt/)

## API

Visit API v2 documentation on [docs.kutt.it](https://docs.kutt.it)

## Integrations

### ShareX

You can use Kutt as your default URL shortener in [ShareX](https://getsharex.com/). If you host your custom instance of Kutt, refer to [ShareX wiki](https://github.com/thedevs-network/kutt/wiki/ShareX) on how to setup.

### Alfred Workflow

Download Kutt's official workflow for [Alfred](https://www.alfredapp.com/) app from [alfred-kutt](https://github.com/thedevs-network/alfred-kutt) repository.

## 3rd Party packages
| Language   | Link                                                       | Description                                        |
| ---------- | ---------------------------------------------------------- | -------------------------------------------------- |
| C# (.NET)  | [KuttSharp](https://github.com/0xaryan/KuttSharp)          | .NET package for Kutt.it url shortener             |
| Python     | [kutt-cli](https://github.com/RealAmirali/kutt-cli)        | Command-line client for Kutt written in Python     |
| Ruby       | [kutt.rb](https://github.com/RealAmirali/kutt.rb)          | Kutt library written in Ruby                       |
| Rust       | [urlshortener](https://github.com/vityafx/urlshortener-rs) | URL shortener library written in Rust              |
| Rust       | [kutt-rs](https://github.com/robatipoor/kutt-rs)           | Command line tool written in Rust                  |
| Node.js    | [node-kutt](https://github.com/ardalanamini/node-kutt)     | Node.js client for Kutt.it url shortener           |
| JavaScript | [kutt-vscode](https://github.com/mehrad77/kutt-vscode)     | Visual Studio Code extention for Kutt              |
| Java       | [kutt-desktop](https://github.com/cipher812/kutt-desktop)  | A Cross platform Java desktop application for Kutt |
| Go         | [kutt-go](https://github.com/raahii/kutt-go)               | Go client for Kutt.it url shortener                |

## Contributing

Pull requests are welcome. You'll probably find lots of improvements to be made.

Open issues for feedback, requesting features, reporting bugs or discussing ideas.

Special thanks to [Thomas](https://github.com/trgwii) and [Muthu](https://github.com/MKRhere). Logo design by [Muthu](https://github.com/MKRhere).
