import { ProjectCaseStudy } from "../types";

export const citationAwareRag: ProjectCaseStudy = {
  slug: "citation-aware-rag",
  title: "Citation-Aware RAG System",
  category: "AI & RAG",
  status: "Production V2.4",
  featured: true,
  order: 1,
  problem:
    "Hallucination, phantom citations, and ungrounded factual synthesis in enterprise LLM documentation retrieval pipelines.",
  solution:
    "Designed a hybrid dense-sparse retrieval pipeline incorporating chunk-level attribution confidence maps, cross-encoder reranking, and deterministic citation verification.",
  techStack: [
    "Python",
    "FastAPI",
    "Pinecone",
    "PyTorch",
    "LangChain",
    "Next.js",
  ],
  metric: {
    value: "98.7%",
    label: "Citation Accuracy (50k+ Docs)",
  },
  previewImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAciF6IUrT65VNXaByHd2G7ZpmaxRL8KBTG5fdxxO4ahUIr2ZfUpKbuHH35r_7HdPe5F0Z1vUsOj3V23FRzGYJ6bHTPi57D2s8px0CsIN-_ZarcQq3Lyybkb-GAVblLB1TdpHFD3cbHPZi96C_eVjx0C9g1rmUQ5oki88TNSAhDdpSOMEKQLhkzOMs1_MxH0hihZEJtSZXi_VqIsMc512TCXD_ovnS35VxL3VOIXkwf",
  previewAlt:
    "High tech minimal user interface showing semantic search with highlighted citation cards, source document verification nodes, and oceanic blue accents",
  previewMetaLeft: "Latency Budget: <180ms",
  previewMetaRight: "Verified Inline Citations",
  links: {
    github: "https://github.com/lavanya-kothalawala",
    live: "#projects",
    showCaseStudy: true,
  },
  overview: {
    summary:
      "An end-to-end Retrieval-Augmented Generation (RAG) architecture engineered to eliminate unsupported claims by enforcing strict inline citation grounding against retrieved source chunks before returning responses.",
    role: "Lead AI & Systems Engineer",
    duration: "14 Weeks",
    status: "Production Ready",
    highlights: [
      "Hybrid BM25 + Dense Vector retrieval with Reciprocal Rank Fusion (RRF).",
      "Sentence-level entailment scoring to reject ungrounded LLM statements.",
      "Interactive source inspection UI linking every generated claim to exact document spans.",
    ],
  },
  objectives: [
    {
      title: "Zero Phantom Citations",
      description:
        "Ensure every cited bracket [n] maps deterministically to a retrieved document passage verified for semantic entailment.",
      icon: "verified",
    },
    {
      title: "Sub-200ms Retrieval Latency",
      description:
        "Maintain fast vector + keyword fusion retrieval even across tens of thousands of technical documents.",
      icon: "speed",
    },
    {
      title: "Transparent Abstention",
      description:
        "Train the synthesis layer to abstain cleanly when retrieved evidence falls below the confidence threshold.",
      icon: "shield",
    },
  ],
  features: [
    {
      title: "Semantic Chunking & Metadata Graph",
      description:
        "Hierarchical document splitter preserving section headers, tables, and cross-document references.",
      tag: "Ingestion",
    },
    {
      title: "Hybrid Dense + Sparse Fusion",
      description:
        "Combines dense embeddings with BM25 lexical matching to capture both conceptual queries and exact domain identifiers.",
      tag: "Retrieval",
    },
    {
      title: "Inline Citation Verifier",
      description:
        "Post-generation NLI verification loop that scores each sentence against its cited source passage.",
      tag: "Verification",
    },
    {
      title: "Streaming Source Highlighting UI",
      description:
        "Next.js interface that streams tokens while highlighting the corresponding document card on hover.",
      tag: "Frontend",
    },
  ],
  architecture: {
    summary:
      "The pipeline separates ingestion, hybrid retrieval, cross-encoder reranking, and citation-constrained generation into stateless microservices orchestrated via FastAPI.",
    layers: [
      {
        name: "01. Document Ingestion & Semantic Chunking",
        tech: "Python • Unstructured • Tiktoken",
        description:
          "Parses PDFs and Markdown into structure-aware chunks with parent-child window pointers and cryptographic chunk IDs.",
      },
      {
        name: "02. Hybrid Index & Retrieval Engine",
        tech: "Pinecone • BM25 • Reciprocal Rank Fusion",
        description:
          "Executes parallel dense and sparse lookups, merging top candidates via RRF before passing top-20 passages to the reranker.",
      },
      {
        name: "03. Cross-Encoder Reranking & Entailment Gate",
        tech: "PyTorch • Cross-Encoder • NLI Scorer",
        description:
          "Scores query-chunk relevance and filters out noisy contexts below the calibrated confidence threshold.",
      },
      {
        name: "04. Citation-Constrained Synthesis API",
        tech: "FastAPI • LangChain • Next.js UI",
        description:
          "Streams structured JSON containing answer spans, inline citation IDs, confidence scores, and exact source excerpts.",
      },
    ],
  },
  keyDecisions: [
    {
      decision: "Hybrid RRF over Pure Dense Vector Search",
      rationale:
        "Pure dense embeddings struggled with exact error codes, acronyms, and version numbers in technical corpora.",
      tradeOff:
        "Slightly higher index storage footprint (+18%) in exchange for a 24% jump in top-5 recall on domain-specific terms.",
    },
    {
      decision: "Post-Generation NLI Citation Verification",
      rationale:
        "Prompting alone cannot guarantee that an LLM's cited passage actually supports the generated sentence.",
      tradeOff:
        "Adds ~35ms of verification overhead but reduces unsupported citation hallucinations to under 1.3%.",
    },
  ],
  challenges: [
    {
      challenge: "Multi-Hop Synthesis Across Fragmented Chunks",
      resolution:
        "Implemented parent-document window expansion so the generator receives surrounding context whenever a child chunk matches.",
      impact: "Improved multi-hop question answering completeness by 31%.",
    },
    {
      challenge: "Latency Spikes During Cross-Encoder Reranking",
      resolution:
        "Quantized the reranker model (FP16) and batched candidate scoring asynchronously in FastAPI.",
      impact: "Cut p95 reranking latency from 210ms down to 48ms.",
    },
  ],
  evaluation: {
    summary:
      "Evaluated using RAGAS and custom citation-precision benchmarks across 1,200 multi-domain technical queries.",
    metrics: [
      {
        label: "Citation Precision",
        value: "98.7%",
        delta: "+21.4% vs baseline",
        description: "Percentage of inline citations verified by NLI entailment.",
      },
      {
        label: "Context Recall@5",
        value: "94.2%",
        delta: "+16.8% vs dense-only",
        description: "Ground-truth answer passage retrieved within top 5 chunks.",
      },
      {
        label: "p95 Retrieval Latency",
        value: "142ms",
        delta: "-98ms optimization",
        description: "End-to-end hybrid lookup + cross-encoder reranking time.",
      },
    ],
  },
  learnings: [
    "Retrieval quality sets a hard ceiling on generation quality—investing in structure-aware chunking yielded larger gains than swapping LLM backbones.",
    "Explicit abstention mechanisms dramatically increase user trust in enterprise AI tools.",
  ],
  futureWork: [
    "Integrate Knowledge Graph entity linking for deeper multi-document reasoning.",
    "Add continuous online feedback loops to fine-tune the domain embedding model.",
  ],
};
