# 🛒 BusesStore

A full-stack e-commerce demo built with **Next.js (App Router)** and **Stripe**, featuring cart management and secure checkout.

<!-- Add a screenshot or GIF here -->
<!-- ![BusesStore screenshot](./screenshots/home.png) -->

<!-- Add your live demo link if you have one -->

<img width="765" height="393" alt="smolstore" src="https://github.com/user-attachments/assets/95566d76-2e1d-41f9-ad82-31f8c94aa6b3" />


🔗 **Live Demo:**  (https://main.dzso07n8hi9uh.amplifyapp.com/) 
## 📖 About

Buse'sStore is a small online store where products and prices come straight from Stripe. Customers can add items to a cart, preview product images, and pay through Stripe's hosted checkout.

This project is based on [3_smolstore](https://github.com/jamezmca/3_smolstore) by Smoljames. I redesigned the UI (see [Acknowledgements](#-acknowledgements)).

## ✨ Features

- Product and price data fetched from Stripe
- Global cart state with React Context
- Image preview modal using React Portals
- Secure, server-side Stripe Checkout
- Success and cancel redirects after payment
- Redesigned, custom UI

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/) (Hooks & Context API)
- [Stripe API](https://stripe.com/docs/api)
- [Node.js](https://nodejs.org/)
- [ESLint](https://eslint.org/)

## 🔁 Checkout Flow

1. User adds items to the cart
2. The cart sends `{ priceId, quantity }` to `/api/checkout`
3. The server creates a Stripe Checkout Session
4. The user is redirected to Stripe's hosted checkout page
5. After payment, the user returns to the success or cancel page

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.18 or newer)
- npm
- A [Stripe account](https://dashboard.stripe.com/register) with products and prices created in **test mode**

### Installation

```bash
# Clone the repository
git clone https://github.com/buseuygun/3_BusesStore.git

# Go into the project folder
cd 3_BusesStore

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_STRIPE_SECRET_KEY=your_stripe_secret_key
```

> ⚠️ Never commit your `.env.local` file or share your Stripe secret key.

### Run the app

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create a production build            |
| `npm run start` | Start the production server          |
| `npm run lint`  | Run ESLint                           |

## 📁 Project Structure

```
3_BusesStore/
├── app/               # Routes, pages and API routes (App Router)
├── components/        # Reusable UI components
├── context/           # Global cart state (React Context)
├── public/            # Static assets
├── envConfig.js       # Environment config
├── next.config.mjs    # Next.js configuration
└── eslint.config.mjs  # ESLint configuration
```

## 📌 Notes

- Stripe runs in **test mode**. Use Stripe's test card `4242 4242 4242 4242` with any future expiry date and any CVC.
- Payments are handled securely on the server and processed by Stripe. No card details touch this app.

## 🙏 Acknowledgements

This project is based on [3_smolstore](https://github.com/jamezmca/3_smolstore) by [Smoljames](https://www.smoljames.com), which I followed as a learning project and then customized. The original idea and the core functionality belong to him.

### What I changed

- Redesigned the **UI**
<!-- Add anything else you changed -->

## 👩‍💻 Author

**Buse Uygun** — [@buseuygun](https://github.com/buseuygun)

## 📄 License

This is a personal learning project based on the original Smolstore by Smoljames. All credit for the original concept goes to him.
