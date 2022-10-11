---
title: EKG Principles
hide:
- navigation
- toc
- title
---

# EKG Principles

=== "Intro"

    These principles are intended to provide guidelines for the development and deployment
    of an [_Enterprise Knowledge Graph (EKG)_](../vocab/ekg.md). 

    The principles emphasize shared meaning and content reuse that are the cornerstone
    of operating in complex and interconnected environments.

    An enterprise that complies with all ten principles has an Enterprise Knowledge Graph.
    
=== "10 Principles"

    <div class="grid cards" markdown>
     
    - :material-cached:{ .lg } __1 - Identity__
    
         {% include-markdown "01-identity.md" start="<!--summary-start-->" end="<!--summary-end-->" %}
         [:octicons-arrow-right-24: Learn more](01-identity.md)

    - :material-cached:{ .lg } __2 - Meaning__
    
         {% include-markdown "02-meaning.md" start="<!--summary-start-->" end="<!--summary-end-->" %}
         [:octicons-arrow-right-24: Learn more](02-meaning.md)

    - :material-cached:{ .lg } __3 - Distributed__
    
         {% include-markdown "03-distributed.md" start="<!--summary-start-->" end="<!--summary-end-->" %}
         [:octicons-arrow-right-24: Learn more](03-distributed.md)

    - :material-cached:{ .lg } __4 - Open World__
    
         {% include-markdown "04-open-world.md" start="<!--summary-start-->" end="<!--summary-end-->" %}
         [:octicons-arrow-right-24: Learn more](04-open-world.md)

    - :material-cached:{ .lg } __5 - Self-describing__
    
         {% include-markdown "05-self-describing.md" start="<!--summary-start-->" end="<!--summary-end-->" %}
         [:octicons-arrow-right-24: Learn more](05-self-describing.md)

    - :material-cached:{ .lg } __6 - Measurement__
    
         {% include-markdown "06-measurement.md" start="<!--summary-start-->" end="<!--summary-end-->" %}
         [:octicons-arrow-right-24: Learn more](06-measurement.md)

    - :material-cached:{ .lg } __7 - Business Orientation__
    
         {% include-markdown "07-business-orientation.md" start="<!--summary-start-->" end="<!--summary-end-->" %}
         [:octicons-arrow-right-24: Learn more](07-business-orientation.md)

    - :material-cached:{ .lg } __8 - Control__
    
         {% include-markdown "08-control.md" start="<!--summary-start-->" end="<!--summary-end-->" %}
         [:octicons-arrow-right-24: Learn more](08-control.md)

    - :material-cached:{ .lg } __9 - Ecosystem__
    
         {% include-markdown "09-ecosystem.md" start="<!--summary-start-->" end="<!--summary-end-->" %}
         [:octicons-arrow-right-24: Learn more](09-ecosystem.md)

    - :material-cached:{ .lg } __10 - Standards__
    
         {% include-markdown "10-standards.md" start="<!--summary-start-->" end="<!--summary-end-->" %}
         [:octicons-arrow-right-24: Learn more](10-standards.md)
    
    </div>

=== "List"
    
    |     | Principle                                          | Summary                                                                                                                                                                                                                                                      |
    | --: | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | 1.  | [Identity](01-identity.md)                         | Any given object is identified with at least one universally unique, opaque, permanent, and web-resolvable identifier.                                                                                                                                       |
    | 2.  | [Meaning](02-meaning.md)                           | The meaning of every data point must be directly resolvable to a machine-readable mathematical definition.                                                                                                                                                   |
    | 3.  | [Distributed](05-self-describing.md)               | An EKG can incorporate any number of datasets of any number of data sources that can be hosted by any number of independent EKG Platforms. Any given access point provides connectivity to the EKG regardless of where it resides.                           |
    | 4.  | [Open World](04-open-world.md)                     | Information can vary over time, come from many internal and external sources, and be based on different identities and models.  These “multiple versions of the truth” need to be reconciled on access by context.                                           |
    | 5.  | [Self-describing](05-self-describing.md)           | An EKG is composed of a set of self-describing datasets that provide information about lineage, provenance, pedigree, maturity, quality, and governance. The EKG Platform has policy enforcement services that are driven by these self-describing datasets. |
    | 6.  | [Measurement](06-measurement.md)                   | The quality and characteristics of the managed knowledge must be measurable and measured.  Measurement criteria are used to designate fitness-for-defined-purpose and must be actionable.                                                                    |
    | 7.  | [Business Orientation](07-business-orientation.md) | All artifacts around and information in the EKG are linked to defined and prioritized use cases.  Nothing in the EKG exists without a known business justification and purpose.                                                                              |
    | 8.  | [Control](08-control.md)                           | Entitlement, privacy, and business policies will be modeled in the EKG and automatically executed, enforced, and audited at the data point level.                                                                                                            |
    | 9.  | [Ecosystem](09-ecosystem.md)                       | An enterprise will use a heterogeneous set of technologies and data sources that will be incorporated into the EKG over time.   All components of the ecosystem are subject to service level agreements.                                                     |
    | 10. | [Standards](10-standards.md)                       | Both the EKG Platform and knowledge content should be based on open standards. Where necessary, the EKG Foundation will work to expand those standards.                                                                                                      |
