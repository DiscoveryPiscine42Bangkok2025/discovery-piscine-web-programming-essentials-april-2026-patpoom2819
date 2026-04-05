#!/bin/bash 
fcount() { local f i=0; for f in *; do let i++; done; echo $i; }; fcount 
