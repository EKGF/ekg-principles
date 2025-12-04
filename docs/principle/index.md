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
     
    - <span class="objective-badge" data-letter="1"></span> __Identity__
    
         {% include-markdown "principle/01-identity.md" start="<!--summary-start-->" end="<!--summary-end-->" %}
         [:octicons-arrow-right-24: Learn more](01-identity.md)

    - <span class="objective-badge" data-letter="2"></span> __Meaning__
    
         {% include-markdown "principle/02-meaning.md" start="<!--summary-start-->" end="<!--summary-end-->" %}
         [:octicons-arrow-right-24: Learn more](02-meaning.md)

    - <span class="objective-badge" data-letter="3"></span> __Distributed__
    
         {% include-markdown "principle/03-distributed.md" start="<!--summary-start-->" end="<!--summary-end-->" %}
         [:octicons-arrow-right-24: Learn more](03-distributed.md)

    - <span class="objective-badge" data-letter="4"></span> __Open World__
    
         {% include-markdown "principle/04-open-world.md" start="<!--summary-start-->" end="<!--summary-end-->" %}
         [:octicons-arrow-right-24: Learn more](04-open-world.md)

    - <span class="objective-badge" data-letter="5"></span> __Self-describing__
    
         {% include-markdown "principle/05-self-describing.md" start="<!--summary-start-->" end="<!--summary-end-->" %}
         [:octicons-arrow-right-24: Learn more](05-self-describing.md)

    - <span class="objective-badge" data-letter="6"></span> __Measurement__
    
         {% include-markdown "principle/06-measurement.md" start="<!--summary-start-->" end="<!--summary-end-->" %}
         [:octicons-arrow-right-24: Learn more](06-measurement.md)

    - <span class="objective-badge" data-letter="7"></span> __Business Orientation__
    
         {% include-markdown "principle/07-business-orientation.md" start="<!--summary-start-->" end="<!--summary-end-->" %}
         [:octicons-arrow-right-24: Learn more](07-business-orientation.md)

    - <span class="objective-badge" data-letter="8"></span> __Control__
    
         {% include-markdown "principle/08-control.md" start="<!--summary-start-->" end="<!--summary-end-->" %}
         [:octicons-arrow-right-24: Learn more](08-control.md)

    - <span class="objective-badge" data-letter="9"></span> __Ecosystem__
    
         {% include-markdown "principle/09-ecosystem.md" start="<!--summary-start-->" end="<!--summary-end-->" %}
         [:octicons-arrow-right-24: Learn more](09-ecosystem.md)

    - <span class="objective-badge" data-letter="10"></span> __Standards__
    
         {% include-markdown "principle/10-standards.md" start="<!--summary-start-->" end="<!--summary-end-->" %}
         [:octicons-arrow-right-24: Learn more](10-standards.md)
    
    </div>

=== "List"
    
    |     | Principle                                          | Summary                                                                                                                                                                                                                                                      |
    | --: | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | <span class="objective-badge objective-badge-sm" data-letter="1"></span> | [Identity](01-identity.md)                         | Any given object is identified with at least one universally unique, opaque, permanent, and web-resolvable identifier.                                                                                                                                       |
    | <span class="objective-badge objective-badge-sm" data-letter="2"></span> | [Meaning](02-meaning.md)                           | The meaning of every data point must be directly resolvable to a machine-readable mathematical definition.                                                                                                                                                   |
    | <span class="objective-badge objective-badge-sm" data-letter="3"></span> | [Distributed](03-distributed.md)                   | An EKG can incorporate any number of datasets of any number of data sources that can be hosted by any number of independent EKG Platforms. Any given access point provides connectivity to the EKG regardless of where it resides.                           |
    | <span class="objective-badge objective-badge-sm" data-letter="4"></span> | [Open World](04-open-world.md)                     | Information can vary over time, come from many internal and external sources, and be based on different identities and models.  These "multiple versions of the truth" need to be reconciled on access by context.                                           |
    | <span class="objective-badge objective-badge-sm" data-letter="5"></span> | [Self-describing](05-self-describing.md)           | An EKG is composed of a set of self-describing datasets that provide information about lineage, provenance, pedigree, maturity, quality, and governance. The EKG Platform has policy enforcement services that are driven by these self-describing datasets. |
    | <span class="objective-badge objective-badge-sm" data-letter="6"></span> | [Measurement](06-measurement.md)                   | The quality and characteristics of the managed knowledge must be measurable and measured.  Measurement criteria are used to designate fitness-for-defined-purpose and must be actionable.                                                                    |
    | <span class="objective-badge objective-badge-sm" data-letter="7"></span> | [Business Orientation](07-business-orientation.md) | All artifacts around and information in the EKG are linked to defined and prioritized use cases.  Nothing in the EKG exists without a known business justification and purpose.                                                                              |
    | <span class="objective-badge objective-badge-sm" data-letter="8"></span> | [Control](08-control.md)                           | Entitlement, privacy, and business policies will be modeled in the EKG and automatically executed, enforced, and audited at the data point level.                                                                                                            |
    | <span class="objective-badge objective-badge-sm" data-letter="9"></span> | [Ecosystem](09-ecosystem.md)                       | An enterprise will use a heterogeneous set of technologies and data sources that will be incorporated into the EKG over time.   All components of the ecosystem are subject to service level agreements.                                                     |
    | <span class="objective-badge objective-badge-sm" data-letter="10"></span> | [Standards](10-standards.md)                       | Both the EKG Platform and knowledge content should be based on open standards. Where necessary, the EKG Foundation will work to expand those standards.                                                                                                      |
