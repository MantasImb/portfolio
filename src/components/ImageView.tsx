import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function ImageView({ src, alt, className }: { src: string, alt: string, className?: string }) {
    return (
        <Zoom>
            <img
                src={src}
                alt={alt}
                className={className}
            />
        </Zoom>
    );
}
