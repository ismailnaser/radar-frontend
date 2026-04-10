/** بصريات أقسام الخدمات المجتمعية — متوافقة مع دبابيس الخريطة */
export const COMMUNITY_CATEGORY_EMOJI = {
  medical: '🏥',
  education: '📚',
  food: '🍲',
  water: '💧',
  institution: '🤝',
};

export const COMMUNITY_CATEGORY_CARD_TONE = {
  medical: '#c62828',
  education: '#4527a0',
  food: '#e65100',
  water: '#0277bd',
  institution: '#5d4037',
};

export function communityCategoryEmoji(slug) {
  return COMMUNITY_CATEGORY_EMOJI[slug] || '✨';
}

export function communityCategoryCardTone(slug) {
  return COMMUNITY_CATEGORY_CARD_TONE[slug] || '#1ebea5';
}
