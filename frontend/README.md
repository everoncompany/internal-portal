# Internal Portal

## Getting Started

create a `.env.local` file in the `frontend/` directory with the following environment variables:

```env
NEXT_PUBLIC_CLIENT_ID=
NEXT_PUBLIC_TENANT_ID=
NEXT_PUBLIC_REDIRECT_URI=http://localhost:3000
```

## Development

Install dependencies:

```
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running tests

This project uses **Jest** for testing. To run the tests:

```bash
npm test
```