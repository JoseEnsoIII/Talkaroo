import React, { useState } from 'react';
import styled from 'styled-components';
import { FiVolume2, FiBookmark, FiCheckCircle } from 'react-icons/fi';

const VocabularyContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  padding: 0.8rem 1.2rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  width: 300px;
  font-size: 1rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  }
`;

const WordHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const Word = styled.h2`
  margin: 0;
  color: #2d3748;
  font-size: 1.5rem;
`;

const Translation = styled.p`
  color: #4a5568;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Pronunciation = styled.span`
  color: #718096;
  font-style: italic;
  font-size: 0.9rem;
`;

const ExampleSentence = styled.div`
  background: #f7fafc;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  color: #4a5568;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #718096;
  padding: 0.5rem;
  transition: color 0.2s;

  &:hover {
    color: #4a90e2;
  }
`;

const ProgressBadge = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background: #48bb78;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background: ${props => props.color || '#e2e8f0'};
  color: #2d3748;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-top: 1rem;
  display: inline-block;
`;

const VocabularyPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data
  const vocabularyItems = [
    {
      id: 1,
      word: "Bonjour",
      translation: "Hello",
      pronunciation: "/bɔ̃.ʒuʁ/",
      example: "Bonjour, comment allez-vous?",
      category: "Greetings",
      mastered: true,
      audioUrl: "#",
      tags: ["Basic", "Formal"]
    },
    {
      id: 2,
      word: "Merci",
      translation: "Thank you",
      pronunciation: "/mɛʁ.si/",
      example: "Merci beaucoup!",
      category: "Politeness",
      mastered: false,
      audioUrl: "#",
      tags: ["Common"]
    },
    // Add more items...
  ];

  const playAudio = (url) => {
    // Implement audio playback
    new Audio(url).play();
  };

  const filteredItems = vocabularyItems.filter(item =>
    item.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.translation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <VocabularyContainer>
      <Header>
        <h1>Vocabulary Builder</h1>
        <SearchInput
          type="text"
          placeholder="Search vocabulary..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Header>

      <Grid>
        {filteredItems.map(item => (
          <Card key={item.id}>
            {item.mastered && (
              <ProgressBadge>
                <FiCheckCircle /> Mastered
              </ProgressBadge>
            )}
            
            <WordHeader>
              <div>
                <Word>{item.word}</Word>
                <Pronunciation>{item.pronunciation}</Pronunciation>
              </div>
              <IconButton onClick={() => playAudio(item.audioUrl)}>
                <FiVolume2 size={24} />
              </IconButton>
            </WordHeader>

            <Translation>{item.translation}</Translation>

            <ExampleSentence>
              "{item.example}"
            </ExampleSentence>

            <div>
              {item.tags.map((tag, index) => (
                <Tag 
                  key={index}
                  color={index % 2 === 0 ? '#EBF8FF' : '#FEFCBF'}
                >
                  {tag}
                </Tag>
              ))}
            </div>

            <IconButton style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
              <FiBookmark size={20} />
            </IconButton>
          </Card>
        ))}
      </Grid>
    </VocabularyContainer>
  );
};

export default VocabularyPage;