import { Content } from "@prismicio/client";
import {
  SliceComponentProps,
  JSXMapSerializer,
  PrismicRichText,
} from "@prismicio/react";
import Heading from "@/app/src/components/heading";
import Bounded from "@/app/src/components/bounded";
import Button from "@/app/src/components/button";


/**
 * Props for `CallToAction`.
 */

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading
      as="h2"
      size="lg"
      className="font-semibold text-center mb-4">
      {children}
    </Heading>
  ),

  paragraph: ({ children }) => <p className="text-center text-slate-600 mb-8">{children}</p>
}

export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-4xl m-auto shadow-xl md:px-12 px-4 py-12 grid place-items-center rounded-lg bg-gradient-to-tr from-cyan-50 via-white to-emerald-500">
        <PrismicRichText field={slice.primary.heading} components={components} />
        <PrismicRichText field={slice.primary.body} components={components} />

        <Button
          field={slice.primary.button_link}
          className="mb-8 md:md-10">
          {slice.primary.button_label}
        </Button>
      </div>
    </Bounded>
  );
};

export default CallToAction;
