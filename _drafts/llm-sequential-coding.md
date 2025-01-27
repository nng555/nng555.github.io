---
layout: post
title:  "Language Models as Meta-Learners"
categories: blog
authors: Nathan Ng
---

The standard way to view language models is as learners of the factorized joint distribution of all sequences of tokens
$p(x\_1, x\_2, x\_3, \cdots, x\_n) = \Pi\_{i=1}^n p(x\_i | x\_{\<i})$ where $x\_{\<i} := \\{x\_1, x\_2, \cdots, x\_{i-1}\\}$ is the sequence of all tokens before $i$.
In this blog post I will argue for an alternative view of language models as *meta-learners* over next-token distributions, which 
