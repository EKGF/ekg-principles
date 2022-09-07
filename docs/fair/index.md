---
author:
  - Jacobus Geluk
---
# Mapping to the FAIR principles

The [FAIR principles](https://www.go-fair.org/fair-principles/) are a popular set
of principles used by many Knowledge Graph practitioners.
This article maps the FAIR principles to the relevant EKG principles.

## Findable

- **F1** -- (Meta)data are assigned a globally unique and persistent identifier
- **F2** -- Data are described with rich metadata (defined by R1 below)
- **F3** -- Metadata clearly and explicitly include the identifier of the data they describe
- **F4** -- (Meta)data are registered or indexed in a searchable resource

### Differences

EKG Principles are slightly more specific or prescriptive:

- Metadata (objects) and data (objects) can potentially have multiple identifiers (but at least one).
- Those identifiers do not necessarily be "persistent" as long as they are (always) resolvable (through HTTP).
- The EKG identifiers (EKG/IRIs) of data objects (but not necessarily metadata objects) should be
  "opaque" as in "meaningless", (relatively) safe to be emailed around, stored in other platforms,
  maximising "proliferation".
- FAIR principle F3 would be phrased the other way around: the data described by metadata refers to it via
  the metadata identifier (i.e. the predicate-IRI).
- FAIR principle F4 slightly differs as well, the EKG Principles require metadata to be directly
  resolvable (via HTTP) machine-readable definitions of the semantics in verifiable formal logic
  (preferably OWL 2).

## Accessible

Once the user finds the required data, they need to know how they can be accessed,
possibly including authentication and authorisation.

- **A1** -- (Meta)data are retrievable by their identifier using a standardized communications protocol
- **A1.1** -- The protocol is open, free, and universally implementable
- **A1.2** -- The protocol allows for an authentication and authorisation procedure, where necessary
- **A2** -- Metadata are accessible, even when the data are no longer available

### Differences

EKG Principles are slightly more specific or prescriptive:

- _"using a standardized communications protocol"_ would be explicitly the HTTP protocol
  (or actually HTTPS/TLS) as a minimum requirement and in addition to that any other protocol, 
  standardized or not.
- _"metadata are accessible"_ would be more explicit for the EKG: 
  all metadata has to be accessible through IRIs that are always "resolvable" via the HTTP protocol.
  In other words, make sure that all your _OWL 2_ ontologies or _RDF Schema (RDFS)_ 
  vocabularies are placed on highly available durable infrastructure that can always be accessed via HTTP.

## Interoperable

The data usually need to be integrated with other data.
In addition, the data need to interoperate with applications or workflows for analysis, storage, and processing.

- **[I1]** -- (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.
- **[I2]** -- (Meta)data use vocabularies that follow FAIR principles
- **[I3]** -- (Meta)data include qualified references to other (meta)data

### Differences

EKG Principles are slightly more specific or prescriptive:

- In the EKG the metadata that describes meaning i.e. the semantics
  (there are also many other types of metadata) that 
  _formal and broadly applicable language for knowledge representation_
  has to be preferably _OWL 2_ or at least _RDF Schema (RDFS)_ or _SHACL_.

## Reusable

The ultimate goal of FAIR is to optimise the reuse of data.
To achieve this, metadata and data should be well-described so that they can be replicated and/or
combined in different settings.

- **R1** -- Meta(data) are richly described with a plurality of accurate and relevant attributes
- **R1.1** -- (Meta)data are released with a clear and accessible data usage license
- **R1.2** -- (Meta)data are associated with detailed provenance
- **R1.3** -- (Meta)data meet domain-relevant community standards

The principles refer to three types of entities: data (or any digital object),
metadata (information about that digital object), and infrastructure.
For instance, principle F4 defines that both metadata and data are registered or indexed in a
searchable resource (the infrastructure component).

### Differences

EKG Principles are slightly more specific or prescriptive:

- _optimization of the reuse of data is the ultimate goal_. 
  It's an important goal for EKG as well but reuse of knowledge and whole
  use cases---with everything that comes with it---is an even higher level goal.
  Furthermore, overall connectedness of all data and knowledge is an equally important goal.
- _metadata and data should be well-described_ but should also be as "unbiased" as possible, not designed
  for one particular (set of) use case(s) but designed to represent the version of the truth that a given data
  source provides with the highest level of integrity.
  See principle [5 -- Self-describing](../principle/05-self-describing.md).
- _Meta(data) are richly described with a plurality of accurate and relevant attributes_.
  "_Richly described_" would not be specific enough for EKG.
  It would have to be _directly resolvable to a machine-readable definition in verifiable formal logic_.
- For all types of recognized metadata, which is metadata that services of the various EKG platforms can
  recognize, the EKGF will specify accepted standards or define standards itself or in
  collaboration with partners like the OMG.
  Since an EKG is a collection of self-describing datasets, each dataset will have its 
  various types of metadata organized in a structured way.

