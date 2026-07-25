import Image, { type ImageProps } from "next/image"

type ThemedImageProps = Omit<ImageProps, "src"> & {
  srcLight: string
  srcDark: string
}

/**
 * Renders both theme variants and toggles visibility with the `dark:` CSS
 * variant, so the correct image is already showing at first paint (no
 * client-side theme check, no post-mount swap/flicker).
 */
export function ThemedImage({ srcLight, srcDark, className, ...props }: ThemedImageProps) {
  return (
    <>
      <Image src={srcLight} className={`dark:hidden ${className ?? ""}`} {...props} />
      <Image src={srcDark} className={`hidden dark:block ${className ?? ""}`} {...props} />
    </>
  )
}
