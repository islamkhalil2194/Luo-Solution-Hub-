/* =========================================================
   BLOG POSTS DATA
   =========================================================
   This is the ONE file you edit to add a new blog post.
   No HTML editing needed — just copy the template below,
   paste it above "];" (before the closing bracket), fill in
   your own text, and push to GitHub. The site builds the
   listing page and the article page from this automatically.

   RULES:
   - slug: lowercase, no spaces, use hyphens (e.g. "my-post-title")
     This becomes part of the URL, and must be unique.
   - date: format YYYY-MM-DD (newest posts show first automatically)
   - body: can contain simple HTML tags:
       <p>...</p>            a paragraph
       <h2>...</h2>          a subheading
       <ul><li>...</li></ul> a bullet list
       <ol><li>...</li></ol> a numbered list
       <strong>...</strong>  bold text
   ========================================================= */

const blogPosts = [

  {
    slug: "tin-number",
    tag: "Guide",
    title: "How to get a TIN number in Tanzania: a step-by-step guide",
    excerpt: "What a TIN number is, who needs one, and the documents required for both individual and business applications.",
    date: "2026-09-02",
    body: `
      <p>
        A Taxpayer Identification Number (TIN) is a unique number issued
        by the Tanzania Revenue Authority (TRA) to identify individuals
        and businesses for tax purposes. If you're employed, running a
        business, registering a company, importing or exporting goods,
        or even buying land or a vehicle, you'll be asked for your TIN
        at some point — so it's worth having one sorted out early.
      </p>

      <h2>Who needs a TIN?</h2>
      <ul>
        <li>Salaried employees, in many cases as required by their employer</li>
        <li>Sole proprietors and small business owners</li>
        <li>Partnerships and registered companies</li>
        <li>NGOs involved in taxable transactions</li>
        <li>Foreign companies operating or trading in Tanzania</li>
      </ul>

      <h2>Documents you'll need</h2>
      <p>For an <strong>individual</strong> TIN application:</p>
      <ul>
        <li>Your NIDA number or National ID</li>
        <li>A passport-size photo</li>
      </ul>

      <p>For a <strong>business</strong> TIN application:</p>
      <ul>
        <li>Certificate of incorporation</li>
        <li>Business license</li>
        <li>TIN numbers and IDs of company directors</li>
      </ul>

      <h2>The application process</h2>
      <ol>
        <li><strong>Create an account</strong> on the TRA e-Filing / Taxpayer Portal, using your NIDA number, email, and phone number.</li>
        <li><strong>Select TIN Registration</strong> and choose whether you're applying as an individual or a business.</li>
        <li><strong>Fill in the form</strong> carefully — your details need to match your NIDA record exactly, since mismatches are one of the most common reasons applications get delayed or rejected.</li>
        <li><strong>Upload your documents</strong> as listed above.</li>
        <li><strong>Submit and wait for verification</strong> — a TRA officer reviews your application before approving it.</li>
        <li><strong>Download your TIN certificate</strong> once approved, directly from your account.</li>
      </ol>

      <p>
        You can also apply in person at a TRA office if you'd rather not
        go through the online portal — the same documents are required
        either way.
      </p>

      <h2>Where people get stuck</h2>
      <p>
        The most common hold-up is a mismatch between the details on
        your application and your NIDA record — even a small spelling
        difference can cause a delay. Double-checking your information
        against your National ID before submitting saves a lot of
        back-and-forth.
      </p>
    `
  }

  /* =====================================================
     TEMPLATE — copy from here down to add a new post,
     paste it ABOVE this comment, and don't forget a comma
     after the previous post's closing "}"
     =====================================================

  ,{
    slug: "your-post-slug-here",
    tag: "Guide",
    title: "Your Post Title Here",
    excerpt: "A one or two sentence summary shown on the blog listing page.",
    date: "2026-01-01",
    body: `
      <p>Your first paragraph goes here.</p>
      <h2>A subheading</h2>
      <p>More text here.</p>
      <ul>
        <li>A bullet point</li>
        <li>Another bullet point</li>
      </ul>
    `
  }

  ===================================================== */

];
