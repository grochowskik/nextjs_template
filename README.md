# Frontend Template

A reusable frontend starter template for quickly bootstrapping new projects.

## Features

- Clean project structure
- Ready-to-use development environment
- Environment variable support
- Easy to extend and customize
- Suitable for building modern web applications
- Custom API integration
- Added authentication support

## Getting Started

### 1. Create a project from the template

Use this repository as a template and create a new repository.

Or clone it directly:

```bash
git clone https://github.com/YOUR_USERNAME/frontend-template.git .
```

### 2. Install dependencies

```bash
pnpm i
```

### 3. Configure environment variables

Copy the example environment file:

```bash
cp .env.example .env
```

Update the variables as needed.

### 4. Run the development server

```bash
pnpm dev
```

The application should now be running locally.

## Project Structure

```
src/

 ├── app/           # Application pages / views
 ├── components/    # Reusable UI components
 ├── config/        # Storing app config
 ├── core/          # API calls and external services
 ├── hooks/         # Custom hooks
 ├── providers/     # Setup app providers
 ├── redux/         # Redux store
 ├── utils/         # Helper functions

```

## Environment Variables

Example `.env.example`:

```
API_URL=http://localhost:3000
```

## Customization

You can modify this template to fit your needs:

- Add UI frameworks
- Add authentication
- Add API integrations
- Extend folder structure

## License

This project is open source and available under the MIT License.
