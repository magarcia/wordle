import cx from "classnames";

export default function Chart({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cx("h-6 w-6", className)}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"></path>
    </svg>
  );
}
