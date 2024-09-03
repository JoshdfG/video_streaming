import { SVGProps } from "react";

const LoadingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg className="rolling-svg" viewBox="0 0 100 100" {...props}>
    <circle
      cx="50"
      cy="50"
      r="40"
      stroke-width="10"
      stroke="#222"
      fill="none"
      stroke-linecap="round"
      stroke-dasharray="251.32741228718347 39.26990816987272"
      transform="rotate(90 50 50)"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 50 50"
        to="360 50 50"
        dur="10s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

export default LoadingIcon;
