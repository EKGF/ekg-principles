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
that we call a _self-describing dataset (SDD)_.[^capability-datasets]
Depending on maturity and architecture these SDDs are also known as _data products_ or
_data services_.

The general idea is that _everything that <ins>can</ins> be said about a given dataset
<ins>should</ins> be described---as close as possible and ideally in---that dataset itself._

Many topic areas can require such description, most of which would be described as "policies"
in the form of models that are enforceable by EKG/Platform Services at run-time.
<!--term-end-->

## Topic Areas

### Core Data-catalog information

Core information about the dataset.

Ontologies:

- DCAT

### Meaning

Linkage to concepts, ontologies, taxonomies and vocabularies.

Ontologies:

- OWL
- SKOS
- SHACL

### Identifier Policies

Identifier registration office, creation policies, identifier related security policies and the like.

### Entitlement Policies

Personas, their privileges and jurisdiction-specific entitlement policies.

### Ownership / Intellectual Property

### Pedigree

### Provenance

- This also unveils what "authoritative data" the dataset contains,
  is it the "golden copy" and "authoritative source" for any given datapoint or not?

Maturity Levels:

- [Business Rules - Level 2](https://maturity.ekgf.org/pillar/data/capability-area/data-quality/capability/business-rules/?h=provenance#maturity-level-2)

### Lineage

### Transformation Policies

Policies that describe in detail how any given datapoint can be constructed from other datapoints whether they reside in the EKG or elsewhere.

Used to:

- provide the detail that's necessary to build up the proper end-to-end [lineage](#lineage) information.
- enable smart generic EKG/Platform Services or EKGOps Pipelines to transform data in a model-driven fashion 

### Changes

### History

### Audit

### Quality Metrics and Assessments

### Hygiene Policies

Policies that describe how the overall "hygiene" of the dataset can be checked.

Used to:

- enable smart generic EKG/Platform Services or EKGOps Pipelines to do a quick "smoke test" of the data and/or a thorough check
  on all kinds of (technical) details such as data formats etc (relates to [data profiling](#data-profiling-policies) as well)

### Data Profiling Policies

### Source Pricing

In order to be able to calculate _the cost of data_ it is useful to know---per dataset---what
was paid to obtain or create the data.

### Usage Pricing

What are the pricing options for users of the data.

### Usage Agreement Policies / Service Level Agreements

Dataset-specific service level agreements or policies to create such agreements.

### Usage Metric Collection Policies

How is the data used and how are usage metrics collected and is that mandatory or optional,
depending on the [Usage Agreement Policy](#usage-agreement-policies-service-level-agreements).

### Revenue

Revenue can be determined in multiple ways, ideally all usage of all data covered by the SDD
is priced and charged for (see [pricing policies](#usage-pricing) and [usage metrics](#usage-metric-collection-policies))
which would make the revenue computation very easy but usually data
is not priced (because there is no infrastructure and priority for it) so the calculation of
the value of the data becomes much more complicated and can only be derived from the position
of the dataset in the context of the larger [_data supply chain_](#data-supply-chain).

### Cost 

E.g. cost of creation, maintenance, "cost of data".

### Value

[Revenue](#revenue) minus [cost](#cost).

### Data supply-chain

E.g. in which processes, use cases, LOBs is the data used and deemed to be critical.

Used to:

- determine the [value of data](#value)
- determine what the criticality is of the data (for regulatory, risk and business continuation purposes)
- determine whether alternative sources may be available
- determine whether business processes could be improved

### Classification

E.g. security classification, PII data, confidentiality, criticality, per context/use case.

### Data Life Cycle

Ontologies:

- DCAT

### Temporality Policies

How is temporality being dealt with, which parts of the dataset are just reflecting the "current state"
and which parts are historic (or future / "what if") data? And which design patterns are used to maintain
temporality? Smart model-driven EKG/Platform services can then a) maintain temporality and b) use it properly.

### Data Retention & Archiving Policies

### Physical Dataset Policies

Given the logical dataset---the SDD---which physical manifestations does it have, what types, which ones
are allowable etc.

For instance, one SDD produced overnight by a batch-job, stored as an RDF file in an S3 bucket, may be
loaded into different databases of different types at different locations.

In the context of a more mature EKG platform, smart services may wish to control the proliferation of
data in all its various manifestations across the enterprise and enforce policies.

### Logging Policies

E.g. which data may or may not appear in logs or only in [obfuscated](#obfuscation-masking-policies) form.

### Obfuscation / Masking Policies

Depending on [entitlement policies](#entitlement-policies), which datapoints are so critical that they
can only be seen in obfuscated or masked form by certain [personas](https://method.ekgf.org/concept/persona/)
in certain [use-cases](https://method.ekgf.org/concept/use-case/)?

How does the actual obfuscation or masking take place, what are the technical mechanisms used for which
particular datapoints? (encryption, hashing, which fields are randomized etc).

Used to:

- ensure that no confidential data appears in any [logging](#logging-policies) or
  monitoring systems and the like.
- ensure that proper obfuscation or masking policies are enforced when
  generating [test datasets](#test-data-policies).
- ensure that, even in production, only entitled personas (see [entitlement policies](#entitlement-policies))
  can see the non-obfuscated versions of certain datapoints.
- make it possible that obfuscated versions of datapoints may be part of larger objects
  seen by certain personas in certain use cases without having to leave those datapoints
  out of the picture altogether.

TODO: Add a side-box about "computations over encrypted data" (see also [Encryption Policies](#encryption-policies))

### Test Data Policies

Policies to create test-datasets derived from the production version of the given SDD.

This is not about the tests themselves, which are usually done in the context of 
a [use case](https://method.ekgf.org/concept/use-case/), but more about how to create
realistic test-data in the first place.

- Even for public datasets, especially if they are very large, it may be useful to have
  a policy (model) for the creation of a subset of the data that can realistically be used
  for testing purposes that contains all the relevant edge cases.
- For confidential data, [masking policies or obfuscation policies](#obfuscation-masking-policies)
  may come into play.
- Goal is to have smart EKG/Platform Services that generate test data on demand for 
  DEV/TEST/UAT environments. 

### Query & Search Policies

E.g. which methods are supported for advanced queries or search requests.

### Inference Policies

E.g. what are the recommended/mandatory instructions for inference engines.

Used to:

- determine whether it is mandatory to host the SDD in an environment where a given type of inference engine is available.
     - datasets with datapoints that are tied to OWL ontologies that are heavily relying on reasoning
     - requires OWL-DL or OWL-RL etc
     - is designed to run with reasoning with multiple schemas (see for instance 
       Stardog's [Reasoning with Multiple Schemas](https://docs.stardog.com/archive/7.5.0/inference-engine/#reasoning-with-multiple-schemas))
     - requires to be loaded in a triplestore product that supports forward chaining (i.e. [Ontotext GraphDb](https://graphdb.ontotext.com/documentation/10.0/reasoning.html)) 
       or backward chaining (i.e. [Stardog](https://docs.stardog.com/archive/7.5.0/inference-engine/))

### Caching Policies

E.g. how long can any given datapoint reside in a cache such as an HTTP proxy etc.

Used to:

- create architectures that heavily rely on caching to improve performance
- inform SPARQL query developers about their options to cache the results of any given SPARQL statement (since SPARQL is 
  an HTTP protocol its quite natural to leverage the standard HTTP caching facilities)
- enable smart caching services to automatically flush stale entries from their caches intelligently
- ensure that [data retention policies](#data-retention-archiving-policies) are also enforced by making 
  sure that certain datapoints do not stick around in long-term caches and content delivery networks etc.

### Encryption Policies

### Governance Policies

### Issue Management Policies

### Change Management Policies

### Funding Policies

E.g. which datapoints can only be retrieved in encrypted form or could be used in encrypted form by certain computations.

!!! note

     Note that this list of topic areas does **not** include "use cases" since use cases are assumed to
     be defined elsewhere (in fact, in their own datasets) where the use case links to the dataset but
     not vice versa because each _self-describing dataset_ is assumed to be designed and developed
     independently from any given use case. Self-describing datasets are "use case agnostic" and as
     much as possible "unbiased", supporting existing use cases and any number of unknown future
     use cases.


[^capability-datasets]: See also the [Capability Datasets](https://maturity.ekgf.org/pillar/data/capability-area/data-architecture/capability/datasets/) in the Maturity Model for the EKG
