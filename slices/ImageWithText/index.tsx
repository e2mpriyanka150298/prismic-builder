import { Content } from "@prismicio/client";
import {
  SliceComponentProps,
  JSXMapSerializer,
  PrismicRichText,
} from "@prismicio/react";
import Heading from "@/app/src/components/heading";
import Bounded from "@/app/src/components/bounded";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

/**
 * Props for `ImageWithText`.
 */

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading
      as="h2"
      size="lg"
      className="md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),

  paragraph: ({ children }) => <p className="max-w-md text-lg font-body text-slate-600">{children}</p>
}

export type ImageWithTextProps =
  SliceComponentProps<Content.ImageWithTextSlice>;

/**
 * Component for "ImageWithText" Slices.
 */
const ImageWithText = ({ slice }: ImageWithTextProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-8 md:grid-cols-2 place-items-center">
        <PrismicNextImage field={slice.primary.image} className={clsx("rounded-lg", slice.variation === "imageRight" && "md:order-2")} />
        <div className="grid gap-4">
          <PrismicRichText field={slice.primary.heading} components={components} />
          <PrismicRichText field={slice.primary.body} components={components} />
        </div>

      </div>
    </Bounded>
  );
};

export default ImageWithText;
