import { writeFileSync } from 'fs'

let types = [
	'neutral',
	'fire',
	'water',
	'nature',
	'electric',
	'earth',
	'mental',
	'wind',
	'digital',
	'melee',
	'crystal',
	'toxic'
]

let str = ''

let multipleGrad = () => {
	types.map((type) => {
		types.map((t) => {
			if (type != t) {
				str += `.${type}-${t} {
                    border-image-source: linear-gradient(to bottom, $${type}, $${t});
                    .tem-info img, .name {
                        border-color: $${type};
                    }
                }`
			}
		})
	})
}

let singleGrad = () => {
	types.map((type) => {
		str += `.${type} {
                border-image-source: linear-gradient(to bottom, $${type}, $${type});
                .tem-info img, .name {
                    border-color: $${type};
                }
            }`
	})
}

multipleGrad()
singleGrad()

writeFileSync('./gradients.txt', str)
