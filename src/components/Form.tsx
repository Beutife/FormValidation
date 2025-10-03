"use client";
import { useForm } from "@tanstack/react-form";

interface User {
  fullname: string;
  email: string;
  password: string;
  confirmField: string;
}

const defaultUser: User = {
  fullname: "",
  email: "",
  password: "",
  confirmField: "",
};

const Form = () => {
  const form = useForm({
    defaultValues: defaultUser,
    onSubmit: async ({ value }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted with values:", value);
      // Add your API call here
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
          form.clearFieldValues
        }}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Submit Your Details
        </h2>

        {/* Full Name Field */}
        <form.Field
          name="fullname"
          validators={{
            onChange: ({ value }) =>
              !value
                ? "First name is required"
                : value.length < 3
                ? "Name must be at least 3 characters"
                : undefined,
            onChangeAsync: async ({ value }) => {
              await new Promise((resolve) => setTimeout(resolve, 1000));
              return value.includes("error") ? 'No "error" allowed in first name' : undefined;
            },
          }}
          children={(field) => (
            <div className="mb-4">
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                name={field.name}
                value={field.state?.value || ""}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  field.state?.meta.errors?.length > 0
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter your full name"
              />
              {field.state?.meta.errors?.length > 0 && (
                <p className="mt-1 text-sm text-red-500">
                  {field.state.meta.errors.join(", ")}
                </p>
              )}
            </div>
          )}
        />

        {/* Email Field */}
        <form.Field
          name="email"
          validators={{
            onChange: ({ value }) =>
              !value
                ? "Email is required"
                : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                ? "Invalid email format"
                : undefined,
          }}
          children={(field) => (
            <div className="mb-4">
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name={field.name}
                value={field.state?.value || ""}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  field.state?.meta.errors?.length > 0
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter your email"
              />
              {field.state?.meta.errors?.length > 0 && (
                <p className="mt-1 text-sm text-red-500">
                  {field.state.meta.errors.join(", ")}
                </p>
              )}
            </div>
          )}
        />

        {/* Password Field */}
        <form.Field
          name="password"
          validators={{
            onChange: ({ value }) =>
              !value
                ? "Password is required"
                : value.length < 6
                ? "Password must be at least 6 characters"
                : undefined,
          }}
          children={(field) => (
            <div className="mb-4">
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                name={field.name}
                value={field.state?.value || ""}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  field.state?.meta.errors?.length > 0
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter your password"
              />
              {field.state?.meta.errors?.length > 0 && (
                <p className="mt-1 text-sm text-red-500">
                  {field.state.meta.errors.join(", ")}
                </p>
              )}
            </div>
          )}
        />

        {/* Confirm Password Field */}
        <form.Field
          name="confirmField"
          validators={{
            onChange: ({ value }) =>
              !value
                ? "Please confirm your password"
                : value !== form.state.values.password
                ? "Passwords do not match"
                : undefined,
          }}
          children={(field) => (
            <div className="mb-6">
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name={field.name}
                value={field.state?.value || ""}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  field.state?.meta.errors?.length > 0
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Confirm your password"
              />
              {field.state?.meta.errors?.length > 0 && (
                <p className="mt-1 text-sm text-red-500">
                  {field.state.meta.errors.join(", ")}
                </p>
              )}
            </div>
          )}
        />

        {/* Submit Button */}
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <button
              type="submit"
              disabled={!canSubmit || isSubmitting}
              className={`w-full py-2 px-4 rounded-md text-white font-medium ${
                canSubmit && !isSubmitting
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              } transition-colors duration-200`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          )}
        />
      </form>
    </div>
  );
};

export default Form;