interface Props {
  className: string;
}

const Minus = ({ className }: Props) => {
  return (
    <div className={className}>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.25 6.75H0.75C0.335789 6.75 0 6.41421 0 6C0 5.58579 0.335789 5.25 0.75 5.25H11.25C11.6642 5.25 12 5.58579 12 6C12 6.41421 11.6642 6.75 11.25 6.75Z"
          fill="#8B8B8B"
        />
      </svg>
    </div>
  );
};

export default Minus;
