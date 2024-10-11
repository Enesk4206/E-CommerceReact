import Stripe from "stripe";
import dotenv, { config } from "dotenv";

{/* dotenv for process.env.stripekey */}
dotenv.config();

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
