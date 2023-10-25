import Script from "next/script"


export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"/>
      <Script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"/>
      <body>{children}</body>
    </html>
  )
}
