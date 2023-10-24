import { DraggableType } from "./DraggableTypes"
import { generateRandomGuid } from "./DraggableUtils"

export const listItemsAssigned: Array<DraggableType> = [
    { itemId: generateRandomGuid(), itemProp1: 'item 1', itemProp2: ['prop2a'] },
    { itemId: generateRandomGuid(), itemProp1: 'item 2', itemProp2: ['prop2a', 'prop2b'] },
    { itemId: generateRandomGuid(), itemProp1: 'item 3', itemProp2: ['prop2a'] },
    { itemId: generateRandomGuid(), itemProp1: 'item 4', itemProp2: ['prop2a', 'prop2b'] },
    { itemId: generateRandomGuid(), itemProp1: 'item 5', itemProp2: ['prop2a'] },
]

export const listItemsUnassigned: Array<DraggableType> = [
    { itemId: generateRandomGuid(), itemProp1: 'item 6', itemProp2: ['prop2a'] },
    { itemId: generateRandomGuid(), itemProp1: 'item 7', itemProp2: ['prop2a', 'prop2b'] },
    { itemId: generateRandomGuid(), itemProp1: 'item 8', itemProp2: ['prop2a'] },
]