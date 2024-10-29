# ZK Authentication

Zero Knowledge Proof Authentication System built with Next.js, React, and Tailwind CSS.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Usage](#usage)
  - [Registration](#registration)
  - [Login](#login)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Overview

ZK Authentication is a secure authentication system leveraging Zero Knowledge Proofs (ZKPs) to ensure user credentials are verified without exposing sensitive information. Built with Next.js for server-side rendering and React for a dynamic user interface, the project emphasizes security and user experience.

## Features

- **User Registration and Login:** Secure registration and authentication using ZKPs.
- **Zero Knowledge Proofs:** Implements `generate_proof` and `verify_proof` functions for secure credential verification.
- **Responsive Design:** Utilizes Tailwind CSS for a responsive and modern UI.
- **Theming:** Supports light and dark modes with `next-themes`.
- **Toast Notifications:** Provides user feedback through toast messages.
- **Alert Dialogs:** Notifies users of errors or important information using alert dialogs.

## Getting Started

### Prerequisites

- **Node.js:** Ensure you have Node.js installed. You can download it from [here](https://nodejs.org/).
- **npm or Yarn:** Package manager for installing dependencies.

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/zk-authentication.git
   cd zk-authentication