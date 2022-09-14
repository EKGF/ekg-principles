---
title: 1 -- Identity
---
# Identity

<!--summary-start-->
Any object in the EKG is identified with at least one universally _unique_, _opaque_,
_permanent_, _non-reassignable_ and _web-resolvable_ identifier in the form of an
_International Resource Identifier (IRI)_ for the EKG---i.e. an _Enterprise Knowledge
Graph IRI (EKG/IRI)_ aka _EKG Identifier_.
<!--summary-end-->

As said, the EKG/IRI identifier is permanent, will be proliferated across the enterprise's
universe---including its ecosystem---and will be used for the expression of facts about the
object including relationships between objects.

Additional non-EKG identifiers may also be assigned, and they may be human-readable,
"external" to the enterprise's EKG and be transient and reassignable.

_Resolving_ an identifier can be done in three ways:

1. using it in a transaction---i.e. a query or update statement---submitted or routed via an
   internet protocol to a "lookup service" that translates one or more given "features" of an
   object to an EKG/IRI.
2. constructing it via a standardized policy from key components and applying a hash and optionally
   signing it---where the object represented by the EKG/IRI may or may not already exist.
3. constructing it by giving the object an EKG/IRI based on a random number in case the EKG is
   the authoritative source for the given object.

## Rationale

While the semantic web technologies---like for instance RDF---generally allow for many and varied IRIs,
and this is still encouraged when integrating systems, there is benefit in being able to rely on one
canonical and unchanging one, which can for example make the mapping of identities a many-to-one
rather than a many-to-many task.

In addition to that, to enhance the likelihood that various EKGs, or smaller Knowledge Graphs within an
EKG---across departments, organizations or ecosystems---can interoperate easily with each other,
the use of standardized EKG/IRIs needs to be encouraged since various EKGs can come to the same
identifiers independently, drastically increasing the number of links across EKGs and therefore
enhancing potential interoperability.

Since EKG Identifiers will proliferate across the enterprise and its ecosystem and be used and stored
for many years to come (could be decades) it is essential that the identifiers are always resolvable
so that the need to make copies of data for long-term storage purposes decreases drastically.

## Implications

- There should be a mapping or service to resolve other identifiers such as names, keys or other IRIs to the EKG/IRI.
- Since it is immutable, the EKG/IRI will have to be _opaque_ i.e. not be a human-readable
  since even human names, company names, customer numbers, Social Security Numbers can change over time.
- Objects that already have a well-established _RDF_ compliant and _Linked Data_ compliant identifier
  may not necessarily need an additional EKG/IRI.
  In fact, they may already have one that is external to the company's EKG.
  It is in many cases recommended to even give those well-established objects, from well-established external
  datasets, an EKG/IRI of your own enterprise as well for various reasons.
  Examples of such objects are _Legal Entity Identifiers (LEIs)_ and _Financial Instrument Global Identifiers (FIGIs)_.
  The EKGF will maintain a list of these for convenience.
- The use of multiple EKG identifiers---often in combination with multiple "legacy identifiers"---generally means
  that an EKG should _not_ use the Unique Name Assumption (UNA) (where the use of a different identifier would
  imply a different object).

