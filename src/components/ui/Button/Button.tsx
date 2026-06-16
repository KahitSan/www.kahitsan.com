// The HUD button was extracted into the shared design system (@kahitsan/ksui).
// This module now re-exports the published component so every existing import
// site (`~/components/ui/Button/Button`) stays unchanged while the single
// canonical implementation lives in ksui.
// Imported via the `./components/*` subpath (not the barrel `.`) so a non-host
// app pulls only this standalone primitive, never the host-coupled component set.
export { default, type ButtonProps } from '@kahitsan/ksui/components/base/Button'
