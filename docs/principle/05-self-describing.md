---
title: 5 -- Self-describing
---
# Self-describing

An EKG is composed of a set of _self-describing datasets (SDDs)_ that provide 
information about _lineage_, _provenance_, _pedigree_, _maturity_, _quality_, 
_licensing_ and _governance_.

As specified in [principle 2](02-meaning), the properties in each Data Point are 
linked to their definition so the meaning is not in doubt. 
A _dataset definition_ supplements this with management information such as its _pedigree_ (how/when 
was it derived/sourced?) and its _provenance_ (where/who did it come from?). 
This applies whether the information is maintained in the EKG itself or accessed/loaded 
from existing enterprise systems (data at rest); or received as data streams/messages (data-in-motion).

## Rationale

This information is essential for data selection, enforcing policy and management of 
the ecosystem as a whole.
As well as being essential for management, the definitions taken together comprise a 
_knowledge catalog_ for the content of the EKG.

## Implications

The information needs to be maintained and made available on an ongoing basis.
It also needs to be sought out for external sourced data, whether accessed in place
or loaded into an EKG platform.
