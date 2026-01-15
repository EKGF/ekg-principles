---
title: 2 -- Meaning
---
# <span class="objective-badge" data-letter="2"></span> Meaning

<!--summary-start-->
The meaning of every _Data Point_ must be directly resolvable
to a _machine-readable definition_ in verifiable formal logic.
<!--summary-end-->

A Data Point combines an object---using its [_Enterprise Knowledge Graph 
IRI (EKG IRI)_](https://method.ekgf.org/article/ekg-iri) as its 
identifier---with the value of a _property_ in some context.
Hence, data is expressed at its most granular level for both data-at-rest
and data-in-motion.

The property itself is always an IRI---often called _predicate IRI_---that 
refers to an object[^1] that represents "the meaning" of the given Data Point.
This object has its own identity and is defined through further properties
based on logic that allow information to be rigorously combined, queried and inferred.
These properties that define properties---also called "axioms"---are standardized
by means of the [_Web Ontology Language (OWL)_](https://www.w3.org/TR/owl2-primer/) 
by the [_World Wide Web Consortium (W3C)_](https://www.w3.org/)
and are grouped into _"OWL ontologies"_ for management purposes.

[//]: # (JAG>PER I don't think the sentence below is useful or makes sense...)

[//]: # (However the machine-readable logic does not replace natural language definitions that)

[//]: # (link the properties and statements to the real world.)

## Rationale

Expressing data at a granular level allows ultimate flexibility for it to be 
sliced, diced, combined and aggregated.
This capability to combine and infer information is further enhanced by the use of 
property definitions built on logic.
Having the properties themselves be objects that can be looked up means that all data
is self-defining and carries its meaning with it.
Since the information is self-defining there is no fixed schema for the EKG
as a whole and it can non-disruptively incorporate additional knowledge.

## Implications

Some further discovery, with subject matter experts and creators of source systems, 
is often needed to truly understand what a given set of data really means and what
can be inferred from it.
In other words you cannot rely on the name of a column in a spreadsheet.
A deceptively simple column name such as "number of European customers" leaves
open the meaning of "European" and "customer" and timing (when does one start
and stop being a customer?).
And different sources could have different interpretations of that same name.
The benefit is consistency, accuracy and the ability to make sound business decisions.

## Advanced

At higher levels of EKG Platform maturity (level 4 and 5 to be exact) the term 
"Data Point" may in fact become a more complex data structure that is used 
"on the wire" that represents the Data Point at a more "holistic" level, 
profoundly supporting _Multiple Versions of the Truth (MVOT)_.

Since an EKG supports many datasets that have overlapping information coming from 
multiple sources, there could be:

1. multiple EKG identifiers (\glspl{ekg:iri}) for the same object
   - One object can have multiple identifiers that can be linked together[^2] and 
     therefore be rightfully addressable with any of these identifiers.
2. multiple definitions of meaning
    - One property of an object can have multiple definitions of meaning, for instance 
      "legal name" can be defined in multiple ontologies and be semantically equivalent[^3] 
      or one property can be defined as a sub-property of another but broader semantic definition[^4].
3. multiple equal or different values coming from multiple sources
4. multiple versions over time of those values (temporality)

For each of these four "axes"---_identity_, _meaning_, _source_, and _temporality_---you could have multiple
options to choose from even while logically, from a user perspective, it's the same data point.

Advanced client applications, services or AIs can use these Data Points to perform last-minute "at the edge"
computations around finding the right value from the right timeline and source with the right quality for
the given context.

[^1]: the official term in the W3C RDF standard for this object is "resource"
[^2]: for instance via `owl:sameAs` i.e. "[Individual Equality](https://www.w3.org/TR/owl2-syntax/\#Individual_Equality)"
[^3]: See [Equivalent Object Properties](https://www.w3.org/TR/owl2-syntax/\#Equivalent_Object_Properties)
      or [Equivalent Data Properties](https://www.w3.org/TR/owl2-syntax/\#Equivalent_Data_Properties)
[^4]: See [Data Subproperties](https://www.w3.org/TR/owl2-syntax/\#Data_Subproperties)
