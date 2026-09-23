type MediaFrameProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function MediaFrame({ src, alt, className = "", priority = false }: MediaFrameProps) {
  return (
    <div className={`media-frame ${className}`}>
      <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} />
    </div>
  );
}
