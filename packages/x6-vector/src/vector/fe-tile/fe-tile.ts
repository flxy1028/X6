import { FeBase } from '../fe-base/fe-base'
import { SVGFETileAttributes, In } from './types'

@FETile.register('FETile')
export class FETile extends FeBase<SVGFETileElement> {
  in(): In | string
  in(type: In): this
  in(type: string): this
  in(type: null): this
  in(type?: In | string | null) {
    return this.attr('in', type)
  }
}

export namespace FETile {
  export function create<Attributes extends SVGFETileAttributes>(
    attrs?: Attributes | null,
  ) {
    const elem = new FETile()
    if (attrs) {
      elem.attr(attrs)
    }
    return elem
  }
}