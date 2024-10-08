interface Props {
  className: string;
}

const Plus = ({ className }: Props) => {
  return (
    <div className={className}>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_28_60)">
          <path
            d="M11.25 5.25H6.75V0.75C6.75 0.335789 6.41421 0 6 0C5.58579 0 5.25 0.335789 5.25 0.75V5.25H0.75C0.335789 5.25 0 5.58579 0 6C0 6.41421 0.335789 6.75 0.75 6.75H5.25V11.25C5.25 11.6642 5.58579 12 6 12C6.41421 12 6.75 11.6642 6.75 11.25V6.75H11.25C11.6642 6.75 12 6.41421 12 6C12 5.58579 11.6642 5.25 11.25 5.25Z"
            fill="#8B8B8B"
          />
        </g>
        <defs>
          <clipPath id="clip0_28_60">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Plus;
