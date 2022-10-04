---
title: Self-describing Dataset
hide:
- toc
authors:
- Jacobus Geluk
---
<!--term-start-->
# Self-describing Dataset (SDD)

In a mature Enterprise Knowledge Graph (EKG), the information provided (or consumed) by 
every connected data source (or target) can and should be described as a logical dataset
that we call a _self-describing dataset (SDD)_.
Depending on maturity and architecture these SDDs are also known as _data products_ or
_data services_.
The general idea is that everything that can be said about a given dataset should be
described as close as possible, ideally in, that dataset itself.
Many topic areas can require such description, most of which would be described as "policies"
in the form of models that are enforceable by EKG/Platform Services at run-time.
<!--term-end-->

## Topic Areas

- Core Data-catalog information (e.g. DCAT ontology)
- Meaning (e.g. linkage to concepts, ontologies, taxonomies, vocabularies etc)
- Identifier Policies (e.g. registration office, creation policies, identifier related security policies)
- Entitlement Policies (personas, their privileges and jurisdiction-specific entitlement policies)
- Ownership
- Intellectual Property
- Pricing (source pricing and usage pricing)
- Usage Agreement Policies
- Pedigree, Provenance, Lineage, Changes, History, Audit
    - This also unveils what "authoritative data" the dataset contains, 
      is it the "golden copy" and "authoritative source" for any given datapoint or not?
- Quality Metrics and Assessments
- Cost (e.g. cost of creation, maintenance, "cost of data")
- Value (e.g. revenue minus cost)
- Data supply-chain (e.g. in which processes, use cases, LOBs is the data used and deemed to be critical)
- Classification (e.g. security classification, PII data, confidentiality, criticality, per context/use case)
- Data Life Cycle
- Temporality Policies (e.g. how is temporality being dealt with)
- Data Retention & Archiving Policies
- Physical Dataset Policies (e.g. given the logical dataset, which physical manifestations are allowed)
- Usage Metric Collection Policies
- Logging Policies (e.g. which data may or may not appear in logs)
- Query & Search Policies (e.g. which methods are supported for advanced queries or search requests)
- Inference Policies (e.g. what are the recommended/mandatory instructions for inference engines)

!!! note

     Note that this list of topic areas does **not** include "use cases" since use cases are assumed to
     be defined elsewhere (in fact, in their own datasets) where the use case links to the dataset but
     not vice versa because each _self-describing dataset_ is assumed to be designed and developed
     independently from any given use case. Self-describing datasets are "use case agnostic" and as
     much as possible "unbiased", supporting existing use cases and any number of unknown future
     use cases.
