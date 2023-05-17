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

let str = `
	$neutral: #e6f7f7;
	$fire: #e85c4e;
	$water: #45cbff;
	$nature: #adde77;
	$electric: #ffe174;
	$earth: #ba795c;
	$mental: #c369a3;
	$wind: #08fab3;
	$digital: #a4c0c1;
	$melee: #fa9260;
	$crystal: #ea4a68;
	$toxic: #5c565c;
	$null: #60606011;
`

let multipleGrad = () => {
	types.map((type) => {
		types.map((t) => {
			if (type != t) {
				str += `.${type}-${t} {
                    border-image-source: linear-gradient(180deg, $${type}, $${t});
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
                border-image-source: linear-gradient(180deg, $${type}, $${type});
                .tem-info img, .name {
                    border-color: $${type};
                }
            }`
	})
}

multipleGrad()
singleGrad()

writeFileSync('src/components/Temcard/gradients.scss', str)
