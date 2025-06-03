import Link from "next/link"

function BlogPage() {
    return (
        <main>
            <p>Blog Pages</p>
            <p>
                <Link href="/blog/post-1">post 1</Link>
            </p>
            <p>
                <Link href="/blog/post-2">post 2</Link>
            </p>
        </main>
    )
}

export default BlogPage
