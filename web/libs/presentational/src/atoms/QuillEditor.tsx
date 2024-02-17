import { MutableRefObject, forwardRef, useEffect, useRef } from 'react';
import 'quill/dist/quill.snow.css'; // import styles

function isMutableRefObject(
  ref: any
): ref is MutableRefObject<HTMLDivElement | null> {
  return ref && 'current' in ref && ref.current !== null;
}

const QuillEditor = forwardRef<HTMLDivElement>((props, ref) => {
  const hasInitialized = useRef(false);

  if (typeof window !== 'undefined') {
    const Quill = require('quill');

    useEffect(() => {
      if (
        isMutableRefObject(ref) &&
        ref.current &&
        !hasInitialized.current &&
        typeof window !== 'undefined'
      ) {
        new Quill(ref.current, {
          theme: 'snow',
          placeholder: 'Nhập nội dung báo cáo ở đây...',
          scrollingContainer: 'auto',
        });
        hasInitialized.current = true;
      }
    }, [ref]);

    return (
      <div
        id="quill-editor"
        className="h-full w-full overflow-auto"
        ref={ref}
      ></div>
    );
  } else {
    return <></>;
  }
});

export default QuillEditor;
