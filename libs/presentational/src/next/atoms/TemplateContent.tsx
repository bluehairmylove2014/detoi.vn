function TemplateContent({ content }: { content: string }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      className="[&>h1]:mt-16 [&>*]:mt-2 [&>ul]:text-base [&>li]:text-base [&>p]:text-base [&>*:first-child]:mt-0"
    />
  );
}

export default TemplateContent;
