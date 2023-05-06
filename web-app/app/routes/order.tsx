import type { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import { useEffect, useRef } from "react";

import { verifyLogin } from "~/models/user.server";
import { createUserSession, getUserId } from "~/session.server";
import { safeRedirect, validateEmail } from "~/utils";

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();

  const quantity = formData.get("quantity")
  const recipientEmail = formData.get("email");
  const senderName = formData.get("name")
  const phoneNumber = formData.get("phoneNumber")
  const phoneCountryCode = formData.get("countryCode")
  
  const productId = formData.get("password");

  if (!validateEmail(recipientEmail)) {
    return json(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  }

};

export const meta: V2_MetaFunction = () => [{ title: "Login" }];

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  //const redirectTo = searchParams.get("redirectTo") || "/notes";
  const actionData = useActionData<typeof action>();
  const quantityRef = useRef<HTMLInputElement>(null);
  const recipientEmailRef = useRef<HTMLInputElement>(null);
  const senderNameRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const phoneCountryCodeRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex min-h-full flex-col justify-center">
      <div className="mx-auto w-full max-w-md px-8">
        <Form method="post" className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                ref={recipientEmailRef}
                id="email"
                required
                autoFocus={true}
                name="email"
                type="email"
                autoComplete="email"
                aria-invalid={actionData?.errors?.email ? true : undefined}
                aria-describedby="email-error"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
              />
              {actionData?.errors?.email ? (
                <div className="pt-1 text-red-700" id="email-error">
                  {actionData.errors.email}
                </div>
              ) : null}
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
            >
              Quantity
            </label>
            <div className="mt-1">
              <input
                id="quantity"
                ref={quantityRef}
                name="quantity"
                type="quantity"
                autoComplete=""
                aria-invalid={actionData?.errors?.password ? true : undefined}
                aria-describedby="password-error"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
              />
              {actionData?.errors?.quantity ? (
                <div className="pt-1 text-red-700" id="password-error">
                  {actionData.errors.quantity}
                </div>
              ) : null}
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <div className="mt-1">
              <input
                id="name"
                ref={senderNameRef}
                name="name"
                type="name"
                autoComplete=""
                aria-invalid={actionData?.errors?.name ? true : undefined}
                aria-describedby="password-error"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
              />
              {actionData?.errors?.name ? (
                <div className="pt-1 text-red-700" id="password-error">
                  {actionData.errors.name}
                </div>
              ) : null}
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <div className="mt-1">
              <input
                id="phoneNumber"
                ref={phoneNumberRef}
                name="phoneNumber"
                type="phoneNumber"
                autoComplete=""
                aria-invalid={actionData?.errors?.phoneNumber ? true : undefined}
                aria-describedby="password-error"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
              />
              {actionData?.errors?.phoneNumber ? (
                <div className="pt-1 text-red-700" id="password-error">
                  {actionData.errors.phoneNumber}
                </div>
              ) : null}
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <div className="mt-1">
              <input
                id="phoneCountryCode"
                ref={phoneCountryCodeRef}
                name="phoneCountryCode"
                type="phoneCountryCode"
                autoComplete=""
                aria-invalid={actionData?.errors?.phoneCountryCode ? true : undefined}
                aria-describedby="password-error"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
              />
              {actionData?.errors?.phoneCountryCode ? (
                <div className="pt-1 text-red-700" id="password-error">
                  {actionData.errors.phoneCountryCode}
                </div>
              ) : null}
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400"
          >
            Purchase
          </button>
        </Form>
      </div>
    </div>
  );
}