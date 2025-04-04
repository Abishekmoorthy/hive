import '@cypress/code-coverage/support';

describe('YouTube Analysis App', () => {
  beforeEach(() => {
    // Visit the app before each test
    cy.visit('http://localhost:3000');
  });

  it('should navigate to "Search by Keyword" and perform a search', () => {
    cy.get('input[placeholder="Enter keyword"]').type('React tutorials');
    cy.contains('button', 'Search').click();

    // Wait for results to load
    cy.get('.results-grid', { timeout: 10000 }).should('be.visible');
    cy.get('.video-card').should('have.length.greaterThan', 0);
  });

  it('should navigate to "Search by Video ID" and perform a search', () => {
    cy.contains('Search by Video ID').click();
    cy.url().should('include', '/search-by-id');

    cy.get('input[placeholder="Enter 11-character YouTube Video ID"]').type('dQw4w9WgXcQ');
    cy.contains('button', 'Search').click();

    // Wait for results to load
    cy.get('.results-grid', { timeout: 10000 }).should('be.visible');
    cy.get('.video-card').should('have.length', 1);
  });

  it('should navigate to "Channel Analysis" and perform a search', () => {
    cy.contains('Channel Analysis').click();
    cy.url().should('include', '/channel-analysis');

    cy.get('input[placeholder="Enter channel name or ID"]').type('Google Developers');
    cy.contains('button', 'Search').click();

    // Wait for results to load
    cy.get('.results-grid', { timeout: 10000 }).should('be.visible');
    cy.get('.video-card').should('have.length.greaterThan', 0);
  });

  it('should navigate to "Playlist Analysis" and perform a search', () => {
    cy.contains('Playlist Analysis').click();
    cy.url().should('include', '/playlist-analysis');

    cy.get('input[placeholder="Enter YouTube Playlist ID"]').type('PLBCF2DAC6FFB574DE');
    cy.contains('button', 'Search').click();

    // Wait for results to load
    cy.get('.results-grid', { timeout: 10000 }).should('be.visible');
    cy.get('.video-card').should('have.length.greaterThan', 0);
  });

  it('should navigate to "Video Comparison" and compare two videos', () => {
    cy.contains('Video Comparison').click();
    cy.url().should('include', '/video-comparison');

    cy.get('input[placeholder="Enter first Video ID"]').type('dQw4w9WgXcQ');
    cy.get('input[placeholder="Enter second Video ID"]').type('3JZ_D3ELwOQ');
    cy.contains('button', 'Compare').click();

    // Wait for results to load
    cy.get('.comparison-panel', { timeout: 10000 }).should('be.visible');
    cy.get('.comparison-card').should('have.length', 2);
  });
});