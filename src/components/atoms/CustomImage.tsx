import { SxProps } from "@mui/system";
import Image, { ImageProps } from "next/image";
import { Span } from "./CustomTypography";

type CustomImageProps = {
  sx?: SxProps;
  children?: never;
};

const CustomImage: React.FC<CustomImageProps & ImageProps> = ({ sx, ...props }) => (
    <Image alt="next-image" {...props} />
);

export default CustomImage;
