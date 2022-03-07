import ImageSlider from "./ImageSlider";
import images from "./imageLoader";

export default function FullImageSlider() {
    return (
        <>
            <ImageSlider images={images}>
                <div>
                    <h1>Image Slider</h1>
                </div>
            </ImageSlider>
        </>
    );
}
